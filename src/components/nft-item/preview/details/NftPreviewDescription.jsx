import React from 'react';

const NftPreviewDescription = ({text}) => {
    return (
        <div className="px-4 py-2 rounded-lg w-full
                        text-gray-900 font-light
                        text-md md:text-lg
                        bg-yellow-100
                        ">
            {text ? text : "Not provided"}
        </div>
    );
};

export default NftPreviewDescription;