// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm2EzHvMUT6bTBq9rUMLWhTFG35CnDy-Q",
  authDomain: "teacher-supply-7a4e5.firebaseapp.com",
  projectId: "teacher-supply-7a4e5",
  storageBucket: "teacher-supply-7a4e5.appspot.com",
  messagingSenderId: "434559337644",
  appId: "1:434559337644:web:676f39b7bc3bf24f21cb09",
  measurementId: "G-V8J662WJ15"
};
export const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
