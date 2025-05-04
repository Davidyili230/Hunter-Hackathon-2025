import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADxhgb-9nYozs3MdsMLqiNdlfU9bJfAvo",
  authDomain: "item-exchange-62282.firebaseapp.com",
  projectId: "item-exchange-62282",
  storageBucket: "item-exchange-62282.firebasestorage.app",
  messagingSenderId: "623060385964",
  appId: "1:623060385964:web:8d8e7e50e9f659afcc9f09",
  measurementId: "G-LH0K7EYY5P"
};
 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};