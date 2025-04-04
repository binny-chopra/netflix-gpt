// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTCVvCWERuCI-3trEb1KsBYXeiCkYmEJ4",
  authDomain: "netflixgpt-binny.firebaseapp.com",
  projectId: "netflixgpt-binny",
  storageBucket: "netflixgpt-binny.firebasestorage.app",
  messagingSenderId: "162718541007",
  appId: "1:162718541007:web:6cc63e98891312cfdf83ba",
  measurementId: "G-SPZ220QN34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
