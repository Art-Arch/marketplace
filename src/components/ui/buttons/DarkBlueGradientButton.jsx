import React from 'react';

const DarkBlueGradientButton = ({title, ...props}) => {
    return (
        <button {...props}
                className="w-full text-white font-extrabold
                           bg-gradient-to-l from-yellow-500 to-yellow-800 rounded-lg px-10 py-2
                           hover:from-yellow-600
                           hover:to-mjol-blue-shadow
                           hover:shadow-mjol-gray-xs"
        >
            {title}
        </button>
    )
}

export default DarkBlueGradientButton;