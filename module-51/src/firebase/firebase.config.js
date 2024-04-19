// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiJi5P39e0HeBnQf9X7DRn0SZXBPMRzuU",
  authDomain: "module-51-99105.firebaseapp.com",
  projectId: "module-51-99105",
  storageBucket: "module-51-99105.appspot.com",
  messagingSenderId: "455912675780",
  appId: "1:455912675780:web:aa86f33342c33ea4fcac91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

