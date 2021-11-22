import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";

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

function writeUserData(userId, name, imageUrl, level, xp) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    profile_picture: imageUrl,
    currentLevel: level,
    currentXp: xp,
  });
}
function readUserData(userId) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export {
  auth,
  googleAuthProvider,
  database,
  signInWithPopup,
  writeUserData,
  readUserData,
};
