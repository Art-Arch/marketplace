import React from 'react';
import GreetingBlock from "./GreetingBlock";
import nftsImg from "../../../resources/nfts-landing.png";

const LandingPage = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="max-w-7xl mx-auto py-8 px-8">
                <div className="grid-cols-4 grid">
                    <div className="md:col-span-2 col-span-4 place-self-center">
                        <GreetingBlock/>
                    </div>
                    <div className="col-span-2 hidden md:block">
                        <img src={nftsImg} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;