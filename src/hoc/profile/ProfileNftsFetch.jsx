import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {PROFILE_TAB, profileSlice} from "../../state/profile/slice";
import {fetchMyNfts} from "../../state/profile/thunk";
import NftsGrid from "../../components/nft-collection/NftsGrid";
import {useSigningClient} from "../../wallet/hooks";

const ProfileNftsFetch = ({accountId}) => {
    const {
        walletAddress,
        signingClient,
        loading,
        error
    } = useSigningClient();
    const {nfts, fetching, activeTab} = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMyNfts(walletAddress))
        return () => dispatch(profileSlice.actions.resetNfts())
    }, [accountId])

    return (
        <NftsGrid fetching={fetching}
                  nfts={activeTab === PROFILE_TAB.LISTED_NFTS
                      ? nfts.filter(nft => nft.isListed())
                      : nfts
                  }
        />
    );
};

export default ProfileNftsFetch;