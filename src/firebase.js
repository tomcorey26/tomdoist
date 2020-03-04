import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD4pU1idISEUgOpP9C76JBJ64Jaz-1IIig",
  authDomain: "tomdoist-e4900.firebaseapp.com",
  databaseURL: "https://tomdoist-e4900.firebaseio.com",
  projectId: "tomdoist-e4900",
  storageBucket: "tomdoist-e4900.appspot.com",
  messagingSenderId: "293059302703",
  appId: "1:293059302703:web:46dbe1954a8d51dca13dda"
});

export { firebaseConfig as firebase };
