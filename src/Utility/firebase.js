import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import"firebase/compat/firestore";
import "firebase/compat/auth";


// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbdrM8po9Om7FerENAQDB3v5ALBkMp21w",
  authDomain: "e-2024.firebaseapp.com",
  projectId: "e-2024",
  storageBucket: "e-2024.appspot.com",
  messagingSenderId: "603955850084",
  appId: "1:603955850084:web:318bc75792bb8d6f206871"
};

// // Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();





//  import firebase from "firebase/compat/app";
// import {getAuth} from "firebase/auth";
//  import "firebase/compat/firestore";
//  import "firebase/compat/auth";

 

// // Your web app's Firebase configuration
//  const firebaseConfig = {
//    apiKey: "AIzaSyBRDhlu4OcG2DRTf3exmdmaiDJDEPSsiY0",
//    authDomain: "clone-47b65.firebaseapp.com",
//    projectId: "clone-47b65",
//    storageBucket: "clone-47b65.firebasestorage.app",
//    messagingSenderId: "1091673046388",
//    appId: "1:1091673046388:web:642ea69a7c9b6f2b960021"
//  };

// // // Initialize Firebase

//  const app =firebase.initializeApp(firebaseConfig);
//   export const auth = getAuth(app);
//   export const db = app.firestore();





// import { initializeApp } from "firebase/app";
// //auth
// import{getAuth} from "firebase/auth"
// import "firebase/compat/firestore"
// import "firebase/compat/auth"

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCG1xtSlnbT9wJ2dPHBysGtxJx1qi0JeT8",
//   authDomain: "clone-7c1ad.firebaseapp.com",
//   projectId: "clone-7c1ad",
//   storageBucket: "clone-7c1ad.firebasestorage.app",
//   messagingSenderId: "243628563967",
//   appId: "1:243628563967:web:350243a8b7f1cdb9bc1bca"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = app.firestore();