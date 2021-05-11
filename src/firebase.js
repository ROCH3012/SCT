import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  // Your web app's Firebase configuration
   apiKey: "AIzaSyCn5MJvkn0WqmgKzk_-XlmhONWEct8EHZw",
   authDomain: "react-contact-form-552d3.firebaseapp.com",
   projectId: "react-contact-form-552d3",
   storageBucket: "react-contact-form-552d3.appspot.com",
   messagingSenderId: "592519551755",
   appId: "1:592519551755:web:e8df52ce6b7f216ac0a00e"
});

var db = firebaseApp.firestore();

export { db };