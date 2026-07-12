// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f0860.firebaseapp.com",
  projectId: "mern-estate-f0860",
  storageBucket: "mern-estate-f0860.firebasestorage.app",
  messagingSenderId: "797685567550",
  appId: "1:797685567550:web:ea7fe935397ac8dfeac16f",
 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
