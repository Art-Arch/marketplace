import React from 'react';
import DarkBlueMjolText from "../../../ui/text/DarkBlueMjolText";
import TokenSVG from "../../../ui/icons/archway/TokenSVG";
import {parseToNormalPrice} from "../../../../business-logic/api/converter";

const PreviewNftPrice = ({price}) => {
    return (
        <div className="flex items-center text-xl">
            <DarkBlueMjolText text={parseToNormalPrice(price)}/>
            <TokenSVG/>
        </div>
    );
};

export default PreviewNftPrice;