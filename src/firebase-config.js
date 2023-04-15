// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDu6GwSZVqZl6jbhGAJ4XKc6nyMkr0VuOA",
    authDomain: "quiz-app-react-6488d.firebaseapp.com",
    projectId: "quiz-app-react-6488d",
    storageBucket: "quiz-app-react-6488d.appspot.com",
    messagingSenderId: "590914214929",
    appId: "1:590914214929:web:ccd1dbffa638fe001125b0"
  };


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)