import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_apiKey,
//   authDomain: process.env.REACT_APP_FIREBASE_authDomain,
//   databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
//   projectId: process.env.REACT_APP_FIREBASE_projectId,
//   storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
//   appId: process.env.REACT_APP_FIREBASE_appId,
// });

const firebaseConfig = {
  apiKey: "AIzaSyBx2tVNXBDUUQ8_XU_Ovd3OBp9BkV9C6XE",
  authDomain: "redux-project-3d293.firebaseapp.com",
  projectId: "redux-project-3d293",
  storageBucket: "redux-project-3d293.appspot.com",
  messagingSenderId: "1066093581512",
  appId: "1:1066093581512:web:12f4860e5906b72b8f01fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  signOut(auth);
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};
