import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import useAuth from './API/AuthApi'
import productApi from '../src/API/ProductApi'
import categoryApi from '../src/API/CategoryApi'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect } from "firebase/auth";
import auth from '../src/Firebase/firebase'
import { FirebaseError } from 'firebase/app';

export const GlobalState = createContext();

export default function DataProvider(props) {

    const [showSearchBar, setShowSearchBar] = useState(false);
    const [token, setToken] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('loginToken')) {
            const getToken = async () => {
                await axios.get(`/api/v1/auth/refreshToken`)
                    .then(res => {
                        setToken(res.data.accessToken)
                    }).catch(err => toast.error(err.response.data.msg))
            }
            getToken()
        }
    }, [])

    const googleSignIn = async () => {
        // try {
        //     const provider = new GoogleAuthProvider();
        //     await signInWithPopup(auth, provider)
        //     await axios.post(`/api/v1/auth/login`, auth.currentUser).then(res => {
        //         // setUser(auth.currentUser)
        //         localStorage.setItem('loginToken', true);
        //         window.location.href = "/"
        //     })
        // } catch (err) {
        //     console.log(err.message);
        // }
    }

    const data = {
        showSearchBar,
        setShowSearchBar,
        token: [token, setToken],
        authApi: useAuth(token),
        productApi: productApi(),
        categoryApi: categoryApi(token),
        googleSignIn
    }

    return (
        <GlobalState.Provider value={data}>
            {props.children}
        </GlobalState.Provider>
    );
}

