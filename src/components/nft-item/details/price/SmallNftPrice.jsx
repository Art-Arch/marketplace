import React from 'react';

import ReactTooltip from "react-tooltip";
import TokenSVG from "../../../ui/icons/archway/TokenSVG";
import {parseToNormalPrice} from "../../../../business-logic/api/converter";

const SmallNftPrice = ({price, isListed}) => {
    return (
        <div className="flex items-center">
            <p className="text-mjol-cyan-base font-extrabold text-md sm:text-lg">
                {isListed ? parseToNormalPrice(price) : "Not listed"}
            </p>
            {isListed &&
                <div>
                    <div data-tip='coin'><TokenSVG/></div>
                    <ReactTooltip place='right' delayShow={100}/>
                </div>
            }
        </div>
    );
};

export default SmallNftPrice;