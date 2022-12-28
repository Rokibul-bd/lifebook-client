import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('Rakib')
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
            .then(res => { })
            .then(data => { })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubcribe()
        }
    }, [])

    const authInfo = {
        user,
        googleSignIn,
        loading,
        createUser,
        logInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;