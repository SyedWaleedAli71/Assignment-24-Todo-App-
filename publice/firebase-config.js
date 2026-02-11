// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDuCQXpQuVQ3XalECcOK8XVsB3YQW87mqA",
    authDomain: "todo-app-42862.firebaseapp.com",
    databaseURL: "https://todo-app-42862-default-rtdb.firebaseio.com",
    projectId: "todo-app-42862",
    storageBucket: "todo-app-42862.firebasestorage.app",
    messagingSenderId: "40471489710",
    appId: "1:40471489710:web:5ce9caba62c8c3895cd13f",
    measurementId: "G-8JLD1KWGNC"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var db = firebase.database();

// const analytics = getAnalytics(app);