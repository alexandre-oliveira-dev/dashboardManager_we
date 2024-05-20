"use client";

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {app} from "./auth/firebase";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, firebaseUser => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  return {user};
};
