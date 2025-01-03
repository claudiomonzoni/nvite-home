import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2yrPZGYoUk5vQlC869IdXRdLWpGdyXgg",
  authDomain: "nvitausuarios.firebaseapp.com",
  projectId: "nvitausuarios",
  storageBucket: "nvitausuarios.firebasestorage.app",
  messagingSenderId: "42025324165",
  appId: "1:42025324165:web:39e579238347fc285423ec"
};
const app = initializeApp(firebaseConfig);
const NvitaAuth = getAuth(app);

export { NvitaAuth as N };
