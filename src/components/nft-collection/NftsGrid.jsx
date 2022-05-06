import SmallNftLoader from "../ui/loaders/SmallNftLoader";
import NftCollectionContainer from "./NftCollectionContainer";
import NftItem from "../nft-item/NftItem";
import React from "react";

const NftsGrid = ({nfts, fetching}) => {
    const loaders = Array(12)
        .fill(0)
        .map((i, idx) =>
            <SmallNftLoader key={idx} width={280} height={410}/>
        )

    return (
        <div className="p-5 md:p-10">
            <NftCollectionContainer>
                {fetching
                    ? loaders
                    : nfts.length === 0
                        ? <div>
                           {/* <div className="mt-20">*/}
                           {/*     <div className="p-2 text-2xl text-center font-extrabold text-transparent bg-clip-text*/}
                           {/*md:text-4xl bg-gradient-to-br from-yellow-500 to-yellow-800">*/}
                           {/*         You don't have any NFTs*/}
                           {/*     </div>*/}
                           {/* </div>*/}
                        </div>
                        : nfts.map(nft =>
                            <NftItem key={nft.getKey()} nft={nft}/>
                        )
                }
            </NftCollectionContainer>
        </div>
    );
};

export default NftsGrid;
