import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDMsmtvZZ_Pz-AQnZjU6e7z4M2gWU1Z7LM",
  authDomain: "think-piece-5ddd4.firebaseapp.com",
  databaseURL: "https://think-piece-5ddd4.firebaseio.com",
  projectId: "think-piece-5ddd4",
  storageBucket: "think-piece-5ddd4.appspot.com",
  messagingSenderId: "37100257684",
  appId: "1:37100257684:web:7b131915336204113e0f81",
};

firebase.initializeApp(config);

// TODO: delete this
window.firebase = firebase;

export default firebase;
export const firestore = firebase.firestore();
