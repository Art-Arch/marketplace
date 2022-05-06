import React from 'react';
import {Link} from "react-router-dom";

const NftCollection = ({collectionName, collectionLink}) => {
    return (
        <div className="text-xs md:text-sm 2xl:text-md font-medium truncate
                         text-mjol-purple-dark-t hover:underline"
              //to={collectionLink}
        >
            {collectionName}
        </div>
    );
};

export default NftCollection;