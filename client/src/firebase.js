// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-a1410.firebaseapp.com",
  projectId: "mern-a1410",
  storageBucket: "mern-a1410.appspot.com",
  messagingSenderId: "213153053760",
  appId: "1:213153053760:web:2b996845b5959777d133a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);