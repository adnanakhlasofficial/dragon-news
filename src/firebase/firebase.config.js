// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqN4U6TDQQrBhgDgWKo6i0Z9EFSprhdAE",
    authDomain: "dragon-news-d057b.firebaseapp.com",
    projectId: "dragon-news-d057b",
    storageBucket: "dragon-news-d057b.firebasestorage.app",
    messagingSenderId: "1028671905470",
    appId: "1:1028671905470:web:4d47d3364edd65d5cf08ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
