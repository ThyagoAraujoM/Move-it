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
  challengesCompleted: number;
};
type currentSessionType = {
  level: number;
  xp: number;
  completedChallenges: number;
};
type AuthContextType = {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  signInWithGoogle: (
    actualLevel: number,
    currentExperience: number,
    currentChallengesCompleted: number
  ) => Promise<void>;
  resetStorageDatas: boolean;
  setResetStorageDatas: Dispatch<SetStateAction<boolean>>;
  loadLocalStorage: () => currentSessionType;
  saveNewData: (newUserState: User) => void;
};
type AuthContextProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider({
  children,
}: AuthContextProviderType) {
  const [user, setUser] = useState<User>();
  const [resetStorageDatas, setResetStorageDatas] = useState(false);

  useEffect(() => {
    // User already logged in
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signInWithGoogle(
    actualLevel: number,
    currentExperience: number,
    currentChallengesCompleted: number
  ) {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);

      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        readUserData(
          uid,
          displayName,
          photoURL,
          actualLevel,
          currentExperience,
          currentChallengesCompleted
        );
        setResetStorageDatas(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function loadLocalStorage() {
    let value = localStorage.getItem("currentSession");

    let currentSessionStorage =
      value === null
        ? { level: 1, xp: 0, completedChallenges: 0 }
        : JSON.parse(value);

    console.log(currentSessionStorage);
    return currentSessionStorage;
  }

  function readUserData(
    userId: string,
    displayName: string,
    photoURL: string,
    actualLevel?: number,
    currentExperience?: number,
    currentChallengesCompleted?: number
  ) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let result = snapshot.val();
          loadUser(
            userId,
            result,
            actualLevel,
            currentExperience,
            currentChallengesCompleted
          );
        } else {
          createNewUser(
            userId,
            displayName,
            photoURL,
            actualLevel != null ? actualLevel + 1 : 1,
            currentExperience != null ? currentExperience : 0,
            currentChallengesCompleted != null ? currentChallengesCompleted : 0
          );
          // salvar novo user no banco de dados
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
      challengesCompleted: number;
    },
    actualLevel?: number,
    currentExperience?: number,
    currentChallengesCompleted?: number
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
      challengesCompleted:
        currentChallengesCompleted != null
          ? result.challengesCompleted + currentChallengesCompleted
          : result.challengesCompleted,
    });
  }

  function createNewUser(
    uid: string,
    displayName: string,
    photoURL: string,
    level: number,
    xp: number,
    currentChallengesCompleted: number
  ) {
    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL,
      level: level,
      xp: xp,
      challengesCompleted: currentChallengesCompleted,
    });
  }

  function saveNewData(newUserState: User) {
    writeUserData(
      newUserState.id,
      newUserState.name,
      newUserState.avatar,
      newUserState.level,
      newUserState.xp,
      newUserState.challengesCompleted
    );
    setUser(newUserState);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signInWithGoogle,
        saveNewData,
        loadLocalStorage,
        resetStorageDatas,
        setResetStorageDatas,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
