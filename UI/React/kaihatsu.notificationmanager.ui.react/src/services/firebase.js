// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxDDoy6o1yTfrjq0T_G31ifSZbpw4cO6A",
  authDomain: "react-dev-106a0.firebaseapp.com",
  //databaseURL: "https://react-dev-106a0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-dev-106a0",
  storageBucket: "react-dev-106a0.appspot.com",
  messagingSenderId: "690386965474",
  appId: "1:690386965474:web:7f50a6dd745c6f9a1cdfbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);