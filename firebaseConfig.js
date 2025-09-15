// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3MDkH4fe1l-olBuESZ1WcyY9CbpOIeMA",
  authDomain: "e-shop-56a19.firebaseapp.com",
  projectId: "e-shop-56a19",
  storageBucket: "e-shop-56a19.firebasestorage.app",
  messagingSenderId: "802919293205",
  appId: "1:802919293205:web:9636bb6bcba03715af891c",
  measurementId: "G-BBH22V117M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app