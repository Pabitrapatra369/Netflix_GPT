// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsaCS4O6ZM2JlxmpH6RDINxtLidriEbi8",
  authDomain: "netflixgpt-1202d.firebaseapp.com",
  projectId: "netflixgpt-1202d",
  storageBucket: "netflixgpt-1202d.firebasestorage.app",
  messagingSenderId: "1004161406524",
  appId: "1:1004161406524:web:d1192b006e621cc7abd539",
  measurementId: "G-4FVBBJZCLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()