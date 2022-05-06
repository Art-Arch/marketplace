import {AppDispatch} from "../../store";
import {previewNftSlice} from "./slice";
import {getNFT} from "../../../business-logic/api/get-nfts"

export const fetchNft = (contractId?: string, tokenId?: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(previewNftSlice.actions.startFetching())
        getNFT(contractId, tokenId)
            .then(nft => {
                dispatch(previewNftSlice.actions.success(nft))
            })
            .catch((e) => {
                console.log("Nft loading error", e)
                dispatch(previewNftSlice.actions.failure())
            })

    }