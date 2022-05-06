import {AppDispatch} from "../../store";
import {exploreNftsSlice} from "./slice";
import {getMarketNFTs} from "../../../business-logic/api/get-nfts";

export const fetchMarketNfts = (accountId: number, from: number, limit: number) =>
    async (dispatch: AppDispatch) => {
        dispatch(exploreNftsSlice.actions.startFetching())
        getMarketNFTs(accountId, from, limit)
            .then(nfts => {
                    nfts.map(nft => dispatch(exploreNftsSlice.actions.addNft(nft)))
                    dispatch(exploreNftsSlice.actions.success())
                }
            )
            .catch((e) => {
                console.log("ERR", e)
                dispatch(exploreNftsSlice.actions.failure())
            })
            .finally(() => dispatch(exploreNftsSlice.actions.success()))
    }