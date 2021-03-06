import React from 'react';
import classNames from "../../../utils/css-utils";
import DarkBlueMjolText from "../text/DarkBlueMjolText";

const MjolBlueGradientButton = ({title, onClick, isActive = true}) => {

    return (
        <button onClick={onClick}
                className={
                    classNames(isActive
                            ? "from-yellow-500 to-yellow-800"
                            : "hover:shadow-mjol-blue-button hover:ring-1 hover:ring-inset hover:ring-yellow-400"
                        , "bg-gradient-to-l from-white to-white rounded-3xl group px-10 py-2 transform duration-200"
                    )
                }
        >
            <div>
                {isActive
                    ? <div className="text-white font-extrabold">{title}</div>
                    : <DarkBlueMjolText text={title}/>
                }
            </div>
        </button>
    );
};

export default MjolBlueGradientButton;