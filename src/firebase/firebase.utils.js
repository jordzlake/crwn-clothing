import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBcHEW7kwvd5okxrtI30kO13k7dT0UKRBY",
  authDomain: "crwn-db-c6560.firebaseapp.com",
  projectId: "crwn-db-c6560",
  storageBucket: "crwn-db-c6560.appspot.com",
  messagingSenderId: "997988782069",
  appId: "1:997988782069:web:dd5f242990b31ac30c9abc",
  measurementId: "G-0SPW7P3CFN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
