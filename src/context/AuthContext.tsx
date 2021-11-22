import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  auth,
  googleAuthProvider,
  signInWithPopup,
  writeUserData,
  readUserData,
} from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
  level: number;
  xp: number;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

type AuthContextProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider({
  children,
}: AuthContextProviderType) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          level: 0,
          xp: 0,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const result = await signInWithPopup(auth, googleAuthProvider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      const data = readUserData(uid);
      if (data != null) {
        // pega os dados e seta o user com esse usuário do banco de dados.
        console.log(data);
      } else {
        // cria novo user no banco de dados e salva no user um usuário com nível 1 e xp 0.
        let level = 1;
        let xp = 0;
        writeUserData(uid, displayName, photoURL, level, xp);
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          level: level,
          xp: xp,
        });
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
