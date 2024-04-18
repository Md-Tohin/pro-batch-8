// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCozDJ8sb2nPFUlP9p_7f8eT2WCIQ61UA8",
  authDomain: "module-50-562d9.firebaseapp.com",
  projectId: "module-50-562d9",
  storageBucket: "module-50-562d9.appspot.com",
  messagingSenderId: "264382460784",
  appId: "1:264382460784:web:7d61c9c2169ea07edad5b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

