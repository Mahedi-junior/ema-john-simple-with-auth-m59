// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKt1MWFdhRCejE6ceYEu-zPRbQcMe4Y-w",
  authDomain: "ema-john-simple-auth-d7d5a.firebaseapp.com",
  projectId: "ema-john-simple-auth-d7d5a",
  storageBucket: "ema-john-simple-auth-d7d5a.appspot.com",
  messagingSenderId: "481249380590",
  appId: "1:481249380590:web:8f24ec66fe8b967a99cbff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
