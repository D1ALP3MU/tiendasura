
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPjVID_RUox4Sba-VRVjKmKY4nghMAoPU",
    authDomain: "tiendasuradp.firebaseapp.com",
    projectId: "tiendasuradp",
    storageBucket: "tiendasuradp.appspot.com",
    messagingSenderId: "429010730104",
    appId: "1:429010730104:web:1a51eb4aa869167c14018d",
    measurementId: "G-X6K41Z6XHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
