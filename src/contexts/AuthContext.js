import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Toastify from "../helpers/toastNotify";
import app from "../helpers/firebase"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()



    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

    const createUser = async (email, password, navigate) => {
        try {
            let userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            Toastify("User Created")
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
            Toastify("Logged in successfully")
            console.log(userCredential);
        } catch (err) {
            alert(err.message);
        }

    }

    const logOut = () => {
        signOut(auth)
        Toastify("Logged out successfully")

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
                Toastify("Logged in successfully")
            }).catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        userObserver(setCurrentUser)
    }, [])


    return (
        <AuthContext.Provider value={{ currentUser, createUser, signIn, logOut, userObserver, signUpProvider }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;