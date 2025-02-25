/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    // checking if token is present in session storage
    if (!sessionStorage.getItem('***')) {
    //Navigate the user back to login page if not logged in
       return <Navigate to='/' replace />

    } else {
        return children;
    }
}

export default ProtectedRoutes