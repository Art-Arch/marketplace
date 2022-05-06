import React from 'react';
import MjolGreenBlueButton from "../../ui/buttons/MjolGreenBlueButton";

const WalletConnectionPage = () => {
    return (
        <div className="min-h-screen grid place-items-center">
            <div className='w-1/4'>
                <MjolGreenBlueButton>Connect your wallet first</MjolGreenBlueButton>
            </div>
        </div>
    );
};

export default WalletConnectionPage;