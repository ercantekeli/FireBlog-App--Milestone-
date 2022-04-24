import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// const firebaseConfig = {
//     apiKey: "AIzaSyCEEHHl4I_CpbhkX7-iPjYsonDa1w_ojbk",
//     authDomain: "fireblog-app-milestone.firebaseapp.com",
//     projectId: "fireblog-app-milestone",
//     storageBucket: "fireblog-app-milestone.appspot.com",
//     messagingSenderId: "650011470330",
//     appId: "1:650011470330:web:cab43434f00c692b971c43"
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
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

export const signIn = async (email, password, navigate) => {
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

export const logOut = () => {
    signOut(auth)
    alert("log outed succesfully")
}

export const userObserver = (setCurrentUser) => {

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setCurrentUser(currentUser)
        } else {
            setCurrentUser(false)
        }
    });
}

export const signUpProvider = (navigate) => {

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            navigate("/")
        }).catch((error) => {
            console.log(error)
        });
}