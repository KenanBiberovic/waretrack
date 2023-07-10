import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "-j5HOTDvekRIwmUSz1EFvln7mKaRnkU",
  authDomain: "waretrack-39c38.firebaseapp.com",
  projectId: "waretrack-39c38",
  storageBucket: "waretrack-39c38.appspot.com",
  messagingSenderId: "966999092576",
  appId: "1:966999092576:web:3f597564df3ee8d972c205",
  measurementId: "G-LQRB5KP5ZM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
