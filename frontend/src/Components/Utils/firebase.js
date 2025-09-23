import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNEbAANVPGCcolluR2s308bxu-XacVMUQ",
  authDomain: "faruk-amzon-clone.firebaseapp.com",
  projectId: "faruk-amzon-clone",
  storageBucket: "faruk-amzon-clone.firebasestorage.app",
  messagingSenderId: "482804764924",
  appId: "1:482804764924:web:431854c5304f1c94418779",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initializing auth
export const auth= getAuth(app);
