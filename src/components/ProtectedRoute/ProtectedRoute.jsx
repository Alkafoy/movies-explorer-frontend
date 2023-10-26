import React from "react";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({ component, ...props }) => {
    const { isLoggedIn } = props;
    return (
        isLoggedIn
            ? component
            : <Navigate to='/signin' replace/>
    )
}

export default ProtectedRoute;