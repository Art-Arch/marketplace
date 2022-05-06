import Lottie from "react-lottie-player";
import lottieJson from "../../../resources/loading.json";
import React from "react";
import DarkBlueTitle from "../text/DarkBlueTitle";
import DarkBlueMjolText from "../text/DarkBlueMjolText";

const TransactionLoader = (props) => {
    let text;
    if (props.stage === 'tx loading'){
        text = 'Transaction 1/1'
    } else if (props.stage === 'ipfs loading'){
        text = 'Uploading image to IPFS (~10 sec)'
    } else {
        text = 'Transaction ' + props.tx_cur+ "/" + props.tx_num
    }
    return (
        <div>
            <div className="my-20 flex bg-light_white justify-center">
                <DarkBlueMjolText text={text}/>
            </div>
            <div className="flex bg-light_white justify-center">
                <div className="my-auto">
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{width: 200, height: 200}}
                    />
                </div>
            </div>
        </div>
    )
}

export default TransactionLoader;