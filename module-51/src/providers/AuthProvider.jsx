import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    //  user
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    //  register user
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //  login user
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const logOut = () => {
        return signOut(auth);      
    }

    const authInfo = { user, setUser, createUser, loginUser, logOut, loader, setLoader }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes  = {
    children : PropTypes.node,
}