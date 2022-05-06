import React from 'react';
import ProfileNavigationBar from "./navbar/ProfileNavigationBar";
import {useSigningClient} from "../../../wallet/hooks";
import Guest from "../guest/Guest";

const ProfilePage = ({tabs, activeTab, onTabChange, children}) => {
    const {
        walletAddress,
        signingClient,
        loading,
        error,
        connectWallet,
        disconnect,
        gasPrice
    } = useSigningClient();

    if (walletAddress === ""){
        return (
            <Guest/>
        )
    }
    return (
        <div className="bg-mjol-white space-y-8 pb-4 min-h-screen">
            <ProfileNavigationBar onTabChange={onTabChange}
                                  activeTab={activeTab}
                                  tabs={tabs}/>

            {children}
        </div>
    );
};

export default ProfilePage;