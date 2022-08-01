// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLBqiMiGYJcpgZMXVRtMPZ9JEn1zb0pxw",
  authDomain: "user-auth-27e1c.firebaseapp.com",
  projectId: "user-auth-27e1c",
  storageBucket: "user-auth-27e1c.appspot.com",
  messagingSenderId: "922906886430",
  appId: "1:922906886430:web:89bca850d34c9bbaa6890f",
  measurementId: "G-V8N90498JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);