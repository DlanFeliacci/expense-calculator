// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkFmNKQGu21860X0P-RPg3am1K-EVYUyE",
  authDomain: "expense-tracker-d9254.firebaseapp.com",
  projectId: "expense-tracker-d9254",
  storageBucket: "expense-tracker-d9254.appspot.com",
  messagingSenderId: "17742526126",
  appId: "1:17742526126:web:aac6c35f1d9c6fe1965f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)