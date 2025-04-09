import React, { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Ініціалізація Firebase
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

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const Profile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    // Перевірка стану аутентифікації
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    // Функція для входу через Google
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Google sign-in successful:', user);
        } catch (error) {
            setError(`Error signing in with Google: ${error.message}`);
            console.error('Error signing in with Google:', error.message);
        }
    };

    // Функція для виходу
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out');
                setUser(null); // Оновлюємо стан після виходу
            })
            .catch((error) => {
                setError(`Error signing out: ${error.message}`);
                console.error('Error signing out:', error.message);
            });
    };

    return (
        <div>
            <h1>Profile</h1>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName}</h2>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div>
                    <h2>Sign In with Google</h2>
                    <button onClick={handleGoogleSignIn}>Sign In with Google</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            )}
        </div>
    );
};

export default Profile;
