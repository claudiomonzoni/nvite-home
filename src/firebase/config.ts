// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.SECRET_APIKEY,
  authDomain: "nvitausuarios.firebaseapp.com",
  projectId: "nvitausuarios",
  storageBucket: "nvitausuarios.firebasestorage.app",
  messagingSenderId: import.meta.env.SECRET_MESSAGINGSENDERID,
  appId: import.meta.env.SECRET_APPID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const NvitaAuth = getAuth(app)

