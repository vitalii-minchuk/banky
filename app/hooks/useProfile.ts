import { collection, limit, onSnapshot, query, where } from "firebase/firestore";
import React, { FC, useEffect, useMemo, useState } from "react";
import { db } from "../firebase";
import { useAuth } from "./useAuth";

interface IProfile {
    uid: string
    displayName: string
    email: string
    docId: string
}
export const useProfile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState<IProfile>({} as IProfile);
    const [name, setName] = useState("");

    const { user } = useAuth();
    
    useEffect(() => {
        onSnapshot(query(collection(db, "users"),
            where("uid", "==", user?.uid), limit(1)), snapshot => {
            const profile = snapshot.docs.map(d => ({
                ...(d.data() as Omit<IProfile, "dicId">), dicId: d.id
            }))[0];

            setProfile(profile);
            setName(profile.displayName);
            setIsLoading(false);
        });

    }, []);

    const value = useMemo(() => ({
        profile, isLoading, name, setName
    }), [profile, isLoading, name]);

    return value;
}