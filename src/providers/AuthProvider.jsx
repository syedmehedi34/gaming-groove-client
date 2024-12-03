/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//
//
//
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginMail, setLoginMail] = useState("");

  //
  //
  // create a new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //? sign in using email password
  const signInUser = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in using google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out auth
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // reset pass
  const resetPassword = (email) => {
    // console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log("error", error);
        // ..
      });
  };
  //  ends reset pass

  //  Update user starts
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  //  Update user ends

  // use effect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    signInUser,
    logOut,
    updateUser,
    loading,

    signInWithGoogle,
    resetPassword,

    loginMail,
    setLoginMail,
    setLoading,
  };

  //
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
