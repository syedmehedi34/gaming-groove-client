import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPUHWsHL8Qn109rcO2riw_A4iRUaTeljI",
  authDomain: "p-hero-assignment.firebaseapp.com",
  projectId: "p-hero-assignment",
  storageBucket: "p-hero-assignment.firebasestorage.app",
  messagingSenderId: "416916706686",
  appId: "1:416916706686:web:d2bacca70361c02396cf2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
