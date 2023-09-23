import { createContext, useEffect, useState } from "react";
export const userContext = createContext();

import app from "../firebase/firebase.config";


//  Add photo to firestore 
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app)
import { collection, addDoc, getDocs } from "firebase/firestore";

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
  updateProfile,
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
  const addExtraUserInfo = (profileInfo)=>updateProfile(auth.currentUser, profileInfo)

  // add photo to firestore 
  const addPhotoToFirestore = (profileInfo)=>addDoc(collection(db, "photos"), profileInfo)
  const getStoredProfilePhoto = ()=> getDocs(collection(db, "users"));

  const userInfo = {
    user,
    loading,
    signInUserWithGoogle,
    signInUserWithFacebook,
    registerWithEmailPassword,
    loginUserWithEmailPassword,
    sendResetPasswordEmail,
    signOutUser,
    addExtraUserInfo,
    addPhotoToFirestore,
    getStoredProfilePhoto
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
