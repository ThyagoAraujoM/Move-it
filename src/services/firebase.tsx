import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDJzY-_oe8gmcU2Czu-5H5q5UGTv1ZAfp0",
  authDomain: "move-it-ab26f.firebaseapp.com",
  databaseURL: "https://move-it-ab26f-default-rtdb.firebaseio.com",
  projectId: "move-it-ab26f",
  storageBucket: "move-it-ab26f.appspot.com",
  messagingSenderId: "1068343393220",
  appId: "1:1068343393220:web:1e3ff7878969dcd6fb4291",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
const database = getDatabase(app);

function writeUserData(
  userId: string,
  name: string,
  imageUrl: string,
  level: number,
  xp: number,
  currentChallengesCompleted: number
) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    profile_picture: imageUrl,
    currentLevel: level,
    currentXp: xp,
    challengesCompleted: currentChallengesCompleted,
  });
}

export { auth, googleAuthProvider, database, signInWithPopup, writeUserData };
