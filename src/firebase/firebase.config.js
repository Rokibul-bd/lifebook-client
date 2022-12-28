// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: 'AIzaSyCZ7rlDZfMR_1khhXCfrA26ChNf4U2n2qs',
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
    apiKey: "AIzaSyCZ7rlDZfMR_1khhXCfrA26ChNf4U2n2qs",
    authDomain: "life-book-1023d.firebaseapp.com",
    projectId: "life-book-1023d",
    storageBucket: "life-book-1023d.appspot.com",
    messagingSenderId: "253145050459",
    appId: "1:253145050459:web:033af62d793ceaef70be7e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


