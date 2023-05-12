// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ-HKrKKFU4G1MTJh8eU7yvgNeCMohZiA",
  authDomain: "restaurante-129fa.firebaseapp.com",
  databaseURL: "https://restaurante-129fa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "restaurante-129fa",
  storageBucket: "restaurante-129fa.appspot.com",
  messagingSenderId: "968192389524",
  appId: "1:968192389524:web:89b476ba16ae9cef07df81",
  measurementId: "G-FYY3BP4Y3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
