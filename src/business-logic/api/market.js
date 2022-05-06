import {calculateFee} from "@cosmjs/stargate";
import {MARKET_CONTRACT_ID} from "../config";


export async function giveApprove(userAddress, signingClient, gasPrice, contractId, tokenId){
    let entrypoint = {
        approve: {
            spender: MARKET_CONTRACT_ID,
            token_id: tokenId
        }
    };
    let txFee = calculateFee(500000, gasPrice);

    //try {
        let tx = await signingClient.execute(userAddress, contractId, entrypoint, txFee);
        console.log('Give approve Tx', tx);
        return tx
    // } catch (e) {
    //     console.warn('Error(give approve)', e);
    //     return null
    // }
}

export async function listNFT(userAddress, signingClient, gasPrice, contractId, tokenId, price) {
    let entrypoint = {
        list_token: {
            token: {
                on_sale: true,
                token_id: tokenId,
                contract_id: contractId,
                owner: userAddress,
                price: price
            }
        }
    };
    let txFee = calculateFee(500000, gasPrice);

  //  try {
        let tx = await signingClient.execute(userAddress, MARKET_CONTRACT_ID, entrypoint, txFee);
        console.log('List Tx', tx);
        return tx
    // } catch (e) {
    //     console.warn('Error(list token)', e);
    //     return null
    // }
}

export async function buyNFT(userAddress, signingClient, gasPrice, contractId, tokenId, price) {
    let entrypoint = {
        buy: {
            token_id: tokenId,
            contract_id: contractId
        }
    };
    let txFee = calculateFee(500000, gasPrice);
    let funds = [{
        denom: "utorii",
        amount: price
    }];

    //try {
        let tx = await signingClient.execute(userAddress, MARKET_CONTRACT_ID, entrypoint, txFee, "", funds);
        console.log('Buy Tx', tx);
        return tx
    // } catch (e) {
    //     console.warn('Error', e);
    //     return null
    // }
}


export async function unlistNFT(userAddress, signingClient, gasPrice, contractId, tokenId) {
    let entrypoint = {
        delist_token: {
            token_key: contractId + "/" + tokenId
        }
    };
    let txFee = calculateFee(500000, gasPrice);

    //  try {
    let tx = await signingClient.execute(userAddress, MARKET_CONTRACT_ID, entrypoint, txFee);
    console.log('Unlist Tx', tx);
    return tx
    // } catch (e) {
    //     console.warn('Error(list token)', e);
    //     return null
    // }
}