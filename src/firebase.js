// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);