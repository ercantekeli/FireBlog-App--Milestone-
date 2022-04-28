import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
import { userObserver } from "../contexts/AuthContext";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        userObserver(setCurrentUser)
    }, [])

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
    };

    //Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

    const createUser = async (email, password, navigate) => {
        try {
            let userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            navigate("/login");
            console.log(userCredential);
        } catch (err) {
            alert(err.message);
        }

    }

    const signIn = async (email, password, navigate) => {
        try {
            let userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            navigate("/");
            console.log(userCredential);
        } catch (err) {
            alert(err.message);
        }

    }

    const logOut = () => {
        signOut(auth)
        alert("log outed succesfully")
    }

    const userObserver = (setCurrentUser) => {

        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setCurrentUser(currentUser)
            } else {
                setCurrentUser(false)
            }
        });
    }

    const signUpProvider = (navigate) => {

        const provider = new GoogleAuthProvider();


        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                navigate("/")
            }).catch((error) => {
                console.log(error)
            });
    }


    return (
        <AuthContext.Provider value={{ currentUser, createUser, signIn, logOut, userObserver, signUpProvider }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;