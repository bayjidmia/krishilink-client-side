import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDvNE4QF-31RyIJ5Vo2biOdlSBKSmFkLU",
  authDomain: "krishilink-auth-system.firebaseapp.com",
  projectId: "krishilink-auth-system",
  storageBucket: "krishilink-auth-system.firebasestorage.app",
  messagingSenderId: "494815527814",
  appId: "1:494815527814:web:1d26d789a3556c0d8b6207",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
