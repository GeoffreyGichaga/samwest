// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAtRR7Y9XTrSVyV3WkWKzJUZjSpqUN8Mk",
  authDomain: "samwest-d432e.firebaseapp.com",
  projectId: "samwest-d432e",
  storageBucket: "samwest-d432e.appspot.com",
  messagingSenderId: "341418746106",
  appId: "1:341418746106:web:5bdcc11174fd49fb5b6943",
  measurementId: "G-J0WZCYVLP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app)