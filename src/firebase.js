import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqw0XD7j2L5IUeXu9icG9S6kZRV_8CA0I",
  authDomain: "gokutodo-b5dad.firebaseapp.com",
  databaseURL: "https://gokutodo-b5dad.firebaseio.com",
  projectId: "gokutodo-b5dad",
  storageBucket: "gokutodo-b5dad.appspot.com",
  messagingSenderId: "915714075162",
  appId: "1:915714075162:web:2fce55a284d5a3051fffa3",
  measurementId: "G-QVPDRF8QYG",
});

const db = firebaseApp.firestore();

export default db;
