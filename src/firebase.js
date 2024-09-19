// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv64BFb-7npjA2ri4Ps4qI3ILSEu2Or1U",
  authDomain: "shazam-fe8dc.firebaseapp.com",
  projectId: "shazam-fe8dc",
  storageBucket: "shazam-fe8dc.appspot.com",
  messagingSenderId: "131734835399",
  appId: "1:131734835399:web:95d22bdce8522f5e50eee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the authentication instance
export const auth = getAuth(app);
