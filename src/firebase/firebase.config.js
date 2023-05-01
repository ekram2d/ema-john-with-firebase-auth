// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbrAX2x9LIB4xfN-Qn27JO3YiCVkBFD4s",
  authDomain: "ema-john-with-firebase-a-cc0b5.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-cc0b5",
  storageBucket: "ema-john-with-firebase-a-cc0b5.appspot.com",
  messagingSenderId: "459417819599",
  appId: "1:459417819599:web:66b63c57cc94fd34229aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;