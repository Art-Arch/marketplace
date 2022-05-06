import {AppDispatch} from "../../store";
import {marketNftTransactionSlice} from "./slice";
import {buyNFT, giveApprove, listNFT, unlistNFT} from "../../../business-logic/api/market";
import {GasPrice} from "@cosmjs/stargate";
import {SigningCosmWasmClient} from "@cosmjs/cosmwasm-stargate";
import {fetchNft} from "../../preview/nft/thunk";

export const sellNft = (accountId: String, signingClient: SigningCosmWasmClient, gasPrice: GasPrice, contractId: string, tokenId: string, price: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(marketNftTransactionSlice.actions.commit_two())
        giveApprove(accountId, signingClient, gasPrice, contractId, tokenId)
            .then(() => {
                dispatch(marketNftTransactionSlice.actions.first_success())
                listNFT(accountId, signingClient, gasPrice, contractId, tokenId, price).then(() => {
                    dispatch(marketNftTransactionSlice.actions.success())
                }).catch((e) => {
                    console.log("List error:", e)
                    dispatch(marketNftTransactionSlice.actions.failure())
                })
            })
            .catch(() => dispatch(marketNftTransactionSlice.actions.failure()))
    }

export const buyNft = (accountId: String, signingClient: SigningCosmWasmClient, gasPrice: GasPrice, contractId: string, tokenId: string, price: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(marketNftTransactionSlice.actions.commit())
        buyNFT(accountId, signingClient, gasPrice, contractId, tokenId, price)
            .then(() => {
                dispatch(marketNftTransactionSlice.actions.success())
            })
            .catch(() => dispatch(marketNftTransactionSlice.actions.failure()))
    }


export const unlistNft = (accountId: String, signingClient: SigningCosmWasmClient, gasPrice: GasPrice, contractId: string, tokenId: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(marketNftTransactionSlice.actions.commit())
        unlistNFT(accountId, signingClient, gasPrice, contractId, tokenId)
            .then(() => dispatch(marketNftTransactionSlice.actions.success()))
            .catch(() => dispatch(marketNftTransactionSlice.actions.failure()))
    }
