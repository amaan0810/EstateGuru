// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estateguru-ca4b7.firebaseapp.com",
  projectId: "estateguru-ca4b7",
  storageBucket: "estateguru-ca4b7.appspot.com",
  messagingSenderId: "500711024962",
  appId: "1:500711024962:web:55d967954357aa58ff00db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);