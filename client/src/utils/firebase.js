
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-64b69.firebaseapp.com",
  projectId: "interview-agent-64b69",
  storageBucket: "interview-agent-64b69.firebasestorage.app",
  messagingSenderId: "335486466262",
  appId: "1:335486466262:web:3e5fa1885df70c6403f177"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}