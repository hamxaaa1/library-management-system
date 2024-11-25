import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy5VqdaujDrgbhEOS1b0nnqXKkvgLlxJ0",
  authDomain: "library-management-syste-29ef6.firebaseapp.com",
  projectId: "library-management-syste-29ef6",
  storageBucket: "library-management-syste-29ef6.firebasestorage.app",
  messagingSenderId: "937331841399",
  appId: "1:937331841399:web:42a4299c2980cb8f36e972",
  measurementId: "G-0P77HEVBSR"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;