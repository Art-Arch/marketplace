import React, {useEffect} from 'react';
import PreviewNftPage from "../../../components/pages/preview/nft/PreviewNftPage";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchNft} from "../../../state/preview/nft/thunk";
import withAccountId from "../../withAccountId";
import RoundLoader from "../../../components/ui/loaders/RoundLoader";
import NotFoundPage from "../../../components/pages/not-found/NotFoundPage";
import {previewNftSlice} from "../../../state/preview/nft/slice";
import {useParams} from "react-router";
import NftStatusHoc from "./NftStatusHoc";
import {useSigningClient} from "../../../wallet/hooks";
import TransactionLoader from "../../../components/ui/loaders/TransactionLoader";

interface PropTypes {
    accountId: string
}

type ParamTypes = {
    contractId: string,
    tokenId: string
}

const PreviewNftPageHoc: React.FC<PropTypes> = ({accountId}) => {
    const {contractId, tokenId} = useParams<ParamTypes>()
    const {nft, success, fetching, payouts} = useAppSelector(state => state.preview.nft)
    const {success_state, full_success, pending} = useAppSelector(state => state.transaction)
    const dispatch = useAppDispatch()
    const {
        walletAddress,
        signingClient,
        loading,
        error,
        gasPrice
    } = useSigningClient();

    // useEffect((): any => {
    //     dispatch(fetchNft(contractId, tokenId))
    //     return () => dispatch(previewNftSlice.actions.reset())
    // }, [accountId])

    useEffect((): any => {
        dispatch(fetchNft(contractId, tokenId))
        return () => dispatch(previewNftSlice.actions.reset())
    }, [pending])

    if (fetching) {
        return <RoundLoader/>
    }

    if (!success || !nft) {
        return <NotFoundPage/>
    }

    if (pending === true) {
        if (success_state === "disabled"){
            return <TransactionLoader tx_cur={1} tx_num={1}/>
        }
        if (success_state === "enabled"){
            return <TransactionLoader tx_cur={1} tx_num={2}/>
        }
        if (success_state === "done 1/2"){
            return <TransactionLoader tx_cur={2} tx_num={2}/>
        }
    }

    return (
        <PreviewNftPage nft={nft}
                        payouts={payouts}
                        statusElement={
                            <NftStatusHoc nft={nft}
                                          accountId={walletAddress}
                                          signingClient={signingClient}
                                          gasPrice={gasPrice}
                            />
                        }
        />)
};

export default withAccountId(PreviewNftPageHoc);
