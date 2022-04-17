// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrVdaFzbzhwlcY4dB3xC7a4kB1RyqBXYE",
  authDomain: "mohsin-click.firebaseapp.com",
  projectId: "mohsin-click",
  storageBucket: "mohsin-click.appspot.com",
  messagingSenderId: "1045879387025",
  appId: "1:1045879387025:web:3ebb32bbc39a1259e8a030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;