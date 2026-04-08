// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo2SDsQxfHpz1fOUltzjcZaqcEiwkRvpg",
  authDomain: "kahayagcateringservices.firebaseapp.com",
  projectId: "kahayagcateringservices",
  storageBucket: "kahayagcateringservices.firebasestorage.app",
  messagingSenderId: "907124275570",
  appId: "1:907124275570:web:8c8fdb8fea46b556fa05eb",
  measurementId: "G-V2VE1N3XY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);