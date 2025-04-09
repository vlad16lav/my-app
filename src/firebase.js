// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApX2E5eUi33t2LzrBbXhFhMDkGEKvZlIg",
    authDomain: "my-app-c8bc3.firebaseapp.com",
    databaseURL: "https://my-app-c8bc3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-app-c8bc3",
    storageBucket: "my-app-c8bc3.firebasestorage.app",
    messagingSenderId: "262807155936",
    appId: "1:262807155936:web:01b37ab702ee55e49d4c85",
    measurementId: "G-CPSTQRJQB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Function to monitor user authentication state
const onUserAuthStateChanged = (callback) => {
    onAuthStateChanged(auth, user => {
        callback(user);
    });
};

// Function for user sign-up (Email/Password)
const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log('User registered:', user);
            return user;
        })
        .catch(error => {
            console.error('Error signing up:', error.message);
            throw error;
        });
};

// Function for user sign-in (Email/Password)
const signInWithEmailAndPasswordHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log('User signed in:', user);
            return user;
        })
        .catch(error => {
            console.error('Error signing in:', error.message);
            throw error;
        });
};

// Function for user sign-out
const signOutHandler = () => {
    return signOut(auth)
        .then(() => {
            console.log('User signed out');
        })
        .catch(error => {
            console.error('Error signing out:', error.message);
            throw error;
        });
};

export { db, signUpWithEmailAndPassword, signInWithEmailAndPasswordHandler, signOutHandler, auth, onUserAuthStateChanged };
