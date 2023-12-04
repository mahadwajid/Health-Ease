// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmbycIMB80wgOm-0YIxxR00CLC-ecTJyQ",
    authDomain: "health-ease-abfee.firebaseapp.com",
    projectId: "health-ease-abfee",
    storageBucket: "health-ease-abfee.appspot.com",
    messagingSenderId: "801399485022",
    appId: "1:801399485022:web:32ade972d25f77ad547acf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};


