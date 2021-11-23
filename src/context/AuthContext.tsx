import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  auth,
  googleAuthProvider,
  signInWithPopup,
  writeUserData,
} from "../services/firebase";
import { getDatabase, ref, child, get } from "firebase/database";

type User = {
  id: string;
  name: string;
  avatar: string;
  level: number;
  xp: number;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: (
    actualLevel: number,
    currentExperience: number
  ) => Promise<void>;
  saveNewXp: (newUserState: User) => void;
  saveNewLevel: (newUserState: User) => void;
  setUser: Dispatch<SetStateAction<User | undefined>>;
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
    if (!user) {
      const unsubscribe = auth.onAuthStateChanged((user: any) => {
        if (user) {
          const { displayName, photoURL, uid } = user;

          if (!displayName || !photoURL) {
            throw new Error("Missing information from Google Account.");
          }

          readUserData(uid, displayName, photoURL);
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, []);

  async function signInWithGoogle(
    actualLevel: number,
    currentExperience: number
  ) {
    const result = await signInWithPopup(auth, googleAuthProvider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      readUserData(uid, displayName, photoURL, actualLevel, currentExperience);
    }
  }

  function readUserData(
    userId: string,
    displayName: string,
    photoURL: string,
    actualLevel?: number,
    currentExperience?: number
  ) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let result = snapshot.val();
          loadUser(userId, result, actualLevel, currentExperience);
        } else {
          createNewUser(
            userId,
            displayName,
            photoURL,
            actualLevel != null ? actualLevel + 1 : 1,
            currentExperience != null ? currentExperience : 0
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function loadUser(
    userId: string,
    result: {
      username: string;
      profile_picture: string;
      currentXp: number;
      currentLevel: number;
      actualLevel?: number;
      currentExperience?: number;
    },
    actualLevel?: number,
    currentExperience?: number
  ) {
    setUser({
      id: userId,
      name: result.username,
      avatar: result.profile_picture,
      xp:
        currentExperience != null
          ? result.currentXp + currentExperience
          : result.currentXp,
      level:
        actualLevel != null
          ? result.currentLevel + actualLevel
          : result.currentLevel,
    });
  }

  function createNewUser(
    uid: string,
    displayName: string,
    photoURL: string,
    level: number,
    xp: number
  ) {
    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL,
      level: level,
      xp: xp,
    });
  }

  function saveNewXp(newUserState: User) {
    writeUserData(
      newUserState.id,
      newUserState.name,
      newUserState.avatar,
      newUserState.level,
      newUserState.xp
    );
    setUser(newUserState);
  }

  function saveNewLevel(newUserState: User) {
    writeUserData(
      newUserState.id,
      newUserState.name,
      newUserState.avatar,
      newUserState.level,
      newUserState.xp
    );
    setUser(newUserState);
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, signInWithGoogle, saveNewXp, saveNewLevel }}>
      {children}
    </AuthContext.Provider>
  );
}
