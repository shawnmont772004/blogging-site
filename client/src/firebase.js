// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_AUTH_KEY,
  authDomain: "mern-51d35.firebaseapp.com",
  projectId: "mern-51d35",
  storageBucket: "mern-51d35.appspot.com",
  messagingSenderId: "445425019483",
  appId: "1:445425019483:web:9ac7396997b1a8e485ed7e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);