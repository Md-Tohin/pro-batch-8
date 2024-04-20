import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4w5AoxtdQ_6Zl5efJb7VjUuYQtbk5Zus",
  authDomain: "module-52-4459f.firebaseapp.com",
  projectId: "module-52-4459f",
  storageBucket: "module-52-4459f.appspot.com",
  messagingSenderId: "542925421573",
  appId: "1:542925421573:web:af5a5bc4a9e809f183b06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;