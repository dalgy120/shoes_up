// Import the functions you need from the SDKs you need
import * as firebase  from "firebase/app";
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkxAFt7ts-8kYhbRFB6mfA3fmjbbFCS48",
  authDomain: "shoes-up.firebaseapp.com",
  projectId: "shoes-up",
  storageBucket: "shoes-up.appspot.com",
  messagingSenderId: "943195477390",
  appId: "1:943195477390:web:042e58443a3c4babed80df",
  measurementId: "G-EWBCJ62XNF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
