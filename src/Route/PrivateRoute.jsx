import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login' />
};

export default PrivateRoute;