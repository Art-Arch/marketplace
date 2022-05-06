import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {ItemMarketStatus} from "../../../state/transaction/state";
import BuyNftContainer from "../../../components/nft-item/preview/status/actions/BuyNftContainer";
import {useNftMarketStatus} from "../../../hooks/useNftMarketStatus";
import {buyNft, sellNft, unlistNft} from "../../../state/transaction/nft/thunk";
import SellNftContainer from "../../../components/nft-item/preview/status/actions/SellNftContainer";
import UnlistNftContainer from "../../../components/nft-item/preview/status/actions/UnlistNftContainer";
import NotListedNftContainer from "../../../components/nft-item/preview/status/NotListedNftContainer";
import {NFT} from "../../../business-logic/models/nft";
import {SigningCosmWasmClient} from "@cosmjs/cosmwasm-stargate"
import { GasPrice } from '@cosmjs/stargate';
import {fetchNft} from "../../../state/preview/nft/thunk";
import {previewNftSlice} from "../../../state/preview/nft/slice";
import RoundLoader from "../../../components/ui/loaders/RoundLoader";
import NotFoundPage from "../../../components/pages/not-found/NotFoundPage";
import {parseToUPrice} from "../../../business-logic/api/converter";

interface PropTypes {
    accountId: string,
    nft: NFT,
    signingClient: SigningCosmWasmClient,
    gasPrice: GasPrice
}

const NftStatusHoc: React.FC<PropTypes> = ({accountId, nft,signingClient,  gasPrice}) => {
    const status = useNftMarketStatus(accountId, nft)
    const dispatch = useAppDispatch()
    const [updPage, setUpdPage] = useState(false)

    // useEffect((): any => {
    //     dispatch(fetchNft(nft.contractId, nft.tokenId))
    //     return () => dispatch(previewNftSlice.actions.reset())
    // }, [updPage])



    const buy = () => {
        dispatch(buyNft(accountId, signingClient, gasPrice, nft.contractId, nft.tokenId, nft.price || ''))
    }

    const sell = (price: string) => {
        dispatch(sellNft(accountId, signingClient, gasPrice, nft.contractId, nft.tokenId, parseToUPrice(price)))
    }

    const unlist = () => {
        dispatch(unlistNft(accountId, signingClient, gasPrice, nft.contractId, nft.tokenId))
    }

    switch (status) {
        case ItemMarketStatus.CAN_BUY:
            return <BuyNftContainer price={nft.price} onClick={buy}/>
        case ItemMarketStatus.CAN_SELL:
            return <SellNftContainer onClick={sell}/>
        case ItemMarketStatus.LISTED:
            return <UnlistNftContainer price={nft.price} onClick={unlist}/>
        case ItemMarketStatus.FREE:
            return <NotListedNftContainer/>

    }
};

export default NftStatusHoc;