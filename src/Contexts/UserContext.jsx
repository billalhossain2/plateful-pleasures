import { createContext, useEffect, useState } from "react";
export const userContext = createContext();

import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);

//providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  //signIn Methods
  const signInUserWithGoogle = () => signInWithPopup(auth, googleProvider);
  const signInUserWithFacebook = ()=> signInWithPopup(auth, facebookProvider);
  const registerWithEmailPassword = (email, password)=> createUserWithEmailAndPassword(auth, email, password);
  const loginUserWithEmailPassword = (email, password)=> signInWithEmailAndPassword(auth, email, password);
  const sendResetPasswordEmail = (email) => sendPasswordResetEmail(auth, email)
  const signOutUser = ()=>signOut(auth);

  const userInfo = {
    user,
    loading,
    signInUserWithGoogle,
    signInUserWithFacebook,
    registerWithEmailPassword,
    loginUserWithEmailPassword,
    sendResetPasswordEmail,
    signOutUser
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });

    return () => unSubscribe();
  }, []);
  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default UserContext;
