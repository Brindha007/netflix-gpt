// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBifUvZvn_uIbK43t0Qhx7Gvi_zEFwsck",
  authDomain: "netflixgpt-356b5.firebaseapp.com",
  projectId: "netflixgpt-356b5",
  storageBucket: "netflixgpt-356b5.firebasestorage.app",
  messagingSenderId: "1084102246886",
  appId: "1:1084102246886:web:e51db45e125ee446d31627",
  measurementId: "G-3YK3Y1N1WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();