// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgmXbff5gsj7GJJPFQ054aR6SrktwF6ww",
  authDomain: "netflixgpt-4c9b0.firebaseapp.com",
  projectId: "netflixgpt-4c9b0",
  storageBucket: "netflixgpt-4c9b0.firebasestorage.app",
  messagingSenderId: "925082063945",
  appId: "1:925082063945:web:81798ff8649a4bff2d1b98",
  measurementId: "G-TFX2BNEMZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();

