// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpL2aIpnBhzxSDXEwZFtDCxaXJefxYk5c",
  authDomain: "ema-jhon-simple-auth-practice.firebaseapp.com",
  projectId: "ema-jhon-simple-auth-practice",
  storageBucket: "ema-jhon-simple-auth-practice.appspot.com",
  messagingSenderId: "896861396297",
  appId: "1:896861396297:web:eb1e49a97f0392e50f4e98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;