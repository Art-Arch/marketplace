import React from 'react';
import PreviewNftPrice from "../../../details/price/PreviewNftPrice";

const withPriceContainer = (Component) => ({price, ...props}) => {
    return (
        <div className="rounded-lg px-5 py-2 space-y-2 bg-mjol-blue-shadow">
            <PreviewNftPrice price={price}/>
            <Component {...props}/>
        </div>
    );
};

export default withPriceContainer;