// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDFC1r9vIil5pH0eJDavxl2Ci1UO8Pz9I",
  authDomain: "chapel-webapp.firebaseapp.com",
  projectId: "chapel-webapp",
  storageBucket: "chapel-webapp.firebasestorage.app",
  messagingSenderId: "80265693665",
  appId: "1:80265693665:web:fb172fbcd40f32e94feaa0",
  databaseURL: "https://chapel-webapp-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };