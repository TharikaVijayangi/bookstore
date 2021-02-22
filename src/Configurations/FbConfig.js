// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyDF7IMGYUwmlBxowN-Z1MF5aXLuDxO599U",
    authDomain: "book-store-bcdbb.firebaseapp.com",
    projectId: "book-store-bcdbb",
    storageBucket: "book-store-bcdbb.appspot.com",
    messagingSenderId: "545648898130",
    appId: "1:545648898130:web:9c28bc0cbb50108903af8b",
    measurementId: "G-X866JJQRW6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;