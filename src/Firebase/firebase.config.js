// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiWOP-BOxFyWf1vpvxiB_juMPyyYRjcxg",
  authDomain: "dragon-news-21664.firebaseapp.com",
  projectId: "dragon-news-21664",
  storageBucket: "dragon-news-21664.appspot.com",
  messagingSenderId: "1059406818950",
  appId: "1:1059406818950:web:c973a378be8adfe1f4ab07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

