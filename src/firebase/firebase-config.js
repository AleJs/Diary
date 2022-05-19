import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWnGO_FJfMu1xu1avui5ZX2AqF7u5mdcc",
  authDomain: "react-pratice-6a202.firebaseapp.com",
  projectId: "react-pratice-6a202",
  storageBucket: "react-pratice-6a202.appspot.com",
  messagingSenderId: "885246189613",
  appId: "1:885246189613:web:af5db0f9c002f026bc58a4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
