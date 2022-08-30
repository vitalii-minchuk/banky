import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { envVariables } from "./config/env";

const firebaseConfig = {
    apiKey: envVariables.API_KEY,
    authDomain: envVariables.AUTH_DOMAIN,
    projectId: envVariables.PROJECT_ID,
    storageBucket: envVariables.STORAGE_BUCKET,
    messagingSenderId: envVariables.MESSAGING_SENDER_ID,
    appId: envVariables.APP_ID,
}

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) => 
    createUserWithEmailAndPassword(auth, email, password);

export const login =(email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();