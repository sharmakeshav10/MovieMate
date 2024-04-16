// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiw2xW6jAXHFIjM2k5oIDUxj_TNW3wQn4",
  authDomain: "moviemate-3aa45.firebaseapp.com",
  projectId: "moviemate-3aa45",
  storageBucket: "moviemate-3aa45.appspot.com",
  messagingSenderId: "233248065072",
  appId: "1:233248065072:web:3ac6777ded725815764ff5",
  measurementId: "G-D0EY4M852B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
