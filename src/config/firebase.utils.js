import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBcNVrmzPMtFjwpR475hthmZxRzi4m40Cc",
  authDomain: "crwn-db-15bda.firebaseapp.com",
  projectId: "crwn-db-15bda",
  storageBucket: "crwn-db-15bda.appspot.com",
  messagingSenderId: "968306789908",
  appId: "1:968306789908:web:886757265c857d483ae101",
  measurementId: "G-BFZ3RHVHRV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
