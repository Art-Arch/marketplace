import {MintSite, NFT} from "../models/nft";
import {ChainInfo} from "../chain.info";
import {CosmWasmClient} from "@cosmjs/cosmwasm-stargate";
import {convertMarketNFT, convertNFT} from "./converter";
import {MARKET_CONTRACT_ID, WHITELISTED_CONTRACTS} from "../config";


async function initQueryHandler(){
    let cwClient = await CosmWasmClient.connect(ChainInfo.rpc);
    return cwClient.queryClient.wasm.queryContractSmart
}

export async function getNFT(contractId, tokenId){
    let queryHandler = await initQueryHandler()
    let entrypoint = {
        all_nft_info: {
            token_id: tokenId
        }
    };
    const nft = await queryHandler(contractId, entrypoint);
    const price = await getNFTPrice(contractId, tokenId);
    return convertNFT(contractId,tokenId, nft, price)
}

async function getNFTPrice(contractId, tokenId){
    let queryHandler = await initQueryHandler()
    let entrypoint = {
        token: {
            token_key: contractId + '/' + tokenId
        }
    };
    let price = null
    try {
        const nft = await queryHandler(MARKET_CONTRACT_ID, entrypoint);
        price = nft.token.price;
    } catch {
    }
    return price
}


export async function getUserNFTs (accountId) {
    console.log("User account address", accountId)
    let queryHandler = await initQueryHandler()

    let resNFTs = [];
    for (let contractId of WHITELISTED_CONTRACTS) {
        let entrypoint = {
            tokens: {
                owner: accountId,
                start_after: "0",
                limit: 20
            }
        };
        const tokenIds = await queryHandler(contractId, entrypoint);
        for (let tokenId of tokenIds["tokens"]) {
            const nftPromise = getNFT(contractId, tokenId);
            resNFTs.push(nftPromise)
        }
    }
    console.log("res", resNFTs)
    return resNFTs
}

export async function getMarketNFTs(accountId, from = 0, limit = 20) {

    let queryHandler = await initQueryHandler()
    let resNFTs = [];

    let entrypoint = {
        range_tokens: {
            start_after: from.toString(),
            limit: limit
        }
    };
    const nfts = (await queryHandler(MARKET_CONTRACT_ID, entrypoint)).tokens;
    console.log(nfts)
    for (let nft of nfts){
        resNFTs.push(convertMarketNFT(nft))
    }
    return resNFTs;
}