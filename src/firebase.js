// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaUvO9Y_JRxWoRM9qNJB6TBE2bhFY1sn4",
  authDomain: "podcast-app-1aa8d.firebaseapp.com",
  projectId: "podcast-app-1aa8d",
  storageBucket: "podcast-app-1aa8d.appspot.com",
  messagingSenderId: "907881279764",
  appId: "1:907881279764:web:93d0dfa99b2aebd100d201",
  measurementId: "G-1K781KH4T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth,db,storage};
