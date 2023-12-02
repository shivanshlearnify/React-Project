// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXWs4vjjFui4lgt_cKJZyz4HuCSn28peo",
  authDomain: "vite-contact-86287.firebaseapp.com",
  projectId: "vite-contact-86287",
  storageBucket: "vite-contact-86287.appspot.com",
  messagingSenderId: "425776757045",
  appId: "1:425776757045:web:477c24708d0dad38db747c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);