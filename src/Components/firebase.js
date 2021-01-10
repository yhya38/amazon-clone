import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBkPYxUmxp1-vq47Z1UibATvbKcYLQbEZs",
    authDomain: "clone-5fa64.firebaseapp.com",
    databaseURL: "https://clone-5fa64.firebaseio.com",
    projectId: "clone-5fa64",
    storageBucket: "clone-5fa64.appspot.com",
    messagingSenderId: "551984575585",
    appId: "1:551984575585:web:645db701061f8509f82620",
    measurementId: "G-3EJCSGKY9P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
    


