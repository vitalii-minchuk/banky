import { onAuthStateChanged, User } from "firebase/auth";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import React, { createContext, FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { auth, db, login, logout, register } from "../firebase";

interface IContext {
    user: User | null
    isLoading: boolean
    register: (email: string, password: string) => Promise<void>
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

export const AuthContext = createContext<IContext>({} as IContext);

interface IProvider {
    children: ReactNode
}
export const AuthProvider: FC<IProvider> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const registerHandler = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const { user } = await register(email, password);

            // const docData = {
            //     _id: user.uid,
            //     displayName: "No name",
            // }

            // await setDoc(doc(db, "users", email), docData);
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                email: user.email,
                displayName: "No name",
              });
        } catch (error: any) {
            Alert.alert("Error reg", error.message);
        } finally {
            setIsLoading(false);
        }
    } 

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            await login(email, password);
        } catch (error: any) {
            Alert.alert("Error login", error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const logoutHandler = async () => {
        setIsLoading(true);
        try {
            await logout();
        } catch (error: any) {
            Alert.alert("Error logout", error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => 
        onAuthStateChanged(auth, user => {
            setUser(user || null);
            setIsLoadingInitial(false);
    }), [])

    const value = useMemo(() => ({
        user,
        isLoading,
        login: loginHandler,
        register: registerHandler,
        logout: logoutHandler
    }), [user, isLoading]);

    return <AuthContext.Provider value={value}>
        {!isLoadingInitial && children}
    </AuthContext.Provider>;
}
