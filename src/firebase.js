import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "ID",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

const db = firebaseApp.firestore();

export default db;
