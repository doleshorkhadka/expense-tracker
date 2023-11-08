// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAacX-3rzxwDONaIuToWMAcGOabSUUWWC8",
  authDomain: "expense-tracker-ec7d2.firebaseapp.com",
  projectId: "expense-tracker-ec7d2",
  storageBucket: "expense-tracker-ec7d2.appspot.com",
  messagingSenderId: "276540910709",
  appId: "1:276540910709:web:a4b4d0fb5d413716c01c3c",
  measurementId: "G-3EWYEFXNV1",
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
