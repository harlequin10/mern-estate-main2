// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-22675.firebaseapp.com",
  projectId: "mern-estate-22675",
  storageBucket: "mern-estate-22675.appspot.com",
  messagingSenderId: "401942377065",
  appId: "1:401942377065:web:1d846a39cef42ec51668f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);