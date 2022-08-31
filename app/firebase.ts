import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { envs } from "./config/env";

const firebaseConfig = {
    apiKey: envs.API_KEY,
    authDomain: envs.AUTH_DOMAIN,
    projectId: envs.PROJECT_ID,
    storageBucket: envs.STORAGE_BUCKET,
    messagingSenderId: envs.MESSAGING_SENDER_ID,
    appId: envs.APP_ID,
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const register = (email: string, password: string) => 
    createUserWithEmailAndPassword(auth, email, password);

export const login =(email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore(app);

