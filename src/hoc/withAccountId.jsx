import React from "react";

const withAccountId = (Component) => (props) => {
    return <Component {...props} accountId={"testAccountId"}/>
};

export default withAccountId;