import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcoOC9LFjtCGwGKT3Y8vQogJ3WQClDOlE",
  authDomain: "expense-tracker-f2e2e.firebaseapp.com",
  projectId: "expense-tracker-f2e2e",
  storageBucket: "expense-tracker-f2e2e.appspot.com",
  messagingSenderId: "371545581664",
  appId: "1:371545581664:web:66b2a75d8a005c0538bb05",
  measurementId: "G-81XT3Z6JDX",
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth };
export default db;
