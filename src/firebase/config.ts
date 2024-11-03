// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2yrPZGYoUk5vQlC869IdXRdLWpGdyXgg",
  authDomain: "nvitausuarios.firebaseapp.com",
  projectId: "nvitausuarios",
  storageBucket: "nvitausuarios.firebasestorage.app",
  messagingSenderId: "42025324165",
  appId: "1:42025324165:web:39e579238347fc285423ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const NvitaAuth = getAuth(app)

