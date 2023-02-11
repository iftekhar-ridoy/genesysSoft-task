import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // for user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        signUpUser,
        signInUser,
        updateUser,
        verifyEmail,
        logout,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;