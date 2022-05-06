import {calculateFee} from "@cosmjs/stargate";
import {NFT_CONTRACT_ID} from "../config";


export async function mintToCommonCollection (userAddress, signingClient, gasPrice, token_metadata, payout) {
    let entrypoint = {
        mint: {
            owner: userAddress,
            extension: {
                name: token_metadata.title,
                description: token_metadata.description,
                image: token_metadata.media
            },
            token_uri: token_metadata.reference
        }
    };
    let txFee = calculateFee(500000, gasPrice);

    try {
        let tx = await signingClient.execute(userAddress, NFT_CONTRACT_ID, entrypoint, txFee);
        console.log('Mint Tx', tx);
        return tx
    } catch (e) {
        console.warn('Error', e);
        return null
    }
}
