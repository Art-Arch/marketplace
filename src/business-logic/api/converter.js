import {MintSite, NFT} from "../models/nft";


export function convertNFT(contractId, tokenId, nft, price){
    const metadata = nft.info.extension;
    return new NFT(
        contractId,
        tokenId,
        nft.access.owner,
        metadata.name,
        metadata.description,
        1,
        metadata.image,
        nft.info.token_uri,
        new MintSite("", ""),
        price
    )
}

export function convertMarketNFT(nft){
    const metadata = nft.extension;
    return new NFT(
        nft.contract_id,
        nft.token_id,
        nft.owner,
        metadata.name,
        metadata.description,
        1,
        metadata.image,
        nft.token_uri,
        new MintSite("", ""),
        nft.price
    )
}

export function parseToNormalPrice(priceString){
    let price = Number.parseInt(priceString) / 1000000
    return price.toString()
}

export function parseToUPrice(priceString){
    let price = Math.fround(Number.parseFloat(priceString) * 1000000)
    return price.toString()
}