import React from 'react';
import {Route, Routes} from "react-router";
import LandingPage from "../components/pages/landing/LandingPage";
import NotFoundPage from "../components/pages/not-found/NotFoundPage";
import CreateCollectionPage from "../components/pages/create/collection/CreateCollectionPage";
import CreateNftPage from "../components/pages/create/nft/CreateNftPage";
import ExploreCollectionsPage from "../components/pages/explore/collection/ExploreCollectionsPage";
import ProfilePageHoc from "../hoc/profile/ProfilePageHoc";
import PreviewNftHoc from "../hoc/preview/nft/PreviewNftPageHoc";
import Logout from "../hoc/auth/Logout";
import ExploreNftsPageHoc from "../hoc/explore/nft/ExploreNftsPageHoc";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" exact element={<LandingPage/>} key="1"/>
            <Route path="/logout" exact element={<Logout logout={() => 0}/>}/>
            <Route path="/nfts" exact element={<ExploreNftsPageHoc/>} key="2"/>
            <Route path="/nft/:contractId/:tokenId" exact element={<PreviewNftHoc/>} key="30"/>
            <Route path="/collections" element={<ExploreCollectionsPage/>} key="3"/>
            <Route path="/create-nft" element={<CreateNftPage/>} key="4"/>
            <Route path="/create-collection" element={<CreateCollectionPage/>} key="5"/>
            <Route path="/profile/nfts" element={<ProfilePageHoc/>} key="6"/>
            {/*<Route path="/profile-collection" element={<ProfileNftCollectionsPage/>} key="11"/>*/}
            <Route path="*" element={<NotFoundPage/>} key="12"/>
        </Routes>
    );
};

export default AppRouter;



