import React from 'react';
import WalletConnectionPage from "../components/pages/auth/WalletConnectionPage";
import {useWallet} from "../business-logic/wallet/useWallet";


const withAuthentication = (Component) => (props) => {
    const {
        walletAddress,
        signingClient,
        loading,
        error,
        connectWallet,
        disconnect,
        gasPrice,
    } = useWallet();

    if (walletAddress === "") {
        return <WalletConnectionPage/>
    }
    return <Component {...props} accountId={walletAddress}/>
};

export default withAuthentication;