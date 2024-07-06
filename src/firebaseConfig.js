// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqHcg3acd-ArYkXyjbF5YXCzNovf_DKlI",
  authDomain: "auth-context-149ec.firebaseapp.com",
  projectId: "auth-context-149ec",
  storageBucket: "auth-context-149ec.appspot.com",
  messagingSenderId: "845198764305",
  appId: "1:845198764305:web:bbb184d5dfd106c16244b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
