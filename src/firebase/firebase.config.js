// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC9nSkz51LTSx8kz-z6qFJ5sOG77RdvG0",
  authDomain: "plateful-pleasures.firebaseapp.com",
  projectId: "plateful-pleasures",
  storageBucket: "plateful-pleasures.appspot.com",
  messagingSenderId: "239472639308",
  appId: "1:239472639308:web:5873e9323d4e21139723e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;