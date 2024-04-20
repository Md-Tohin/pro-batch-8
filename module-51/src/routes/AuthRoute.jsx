import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from 'prop-types';

const AuthRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(!user){
        return children;
    }
    return <Navigate to="/user/dashboard"></Navigate>   
};

export default AuthRoute;

AuthRoute.propTypes  = {
    children : PropTypes.node,
}