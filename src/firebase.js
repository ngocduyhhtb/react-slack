import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYGu-wISDMcDhmdkyAL2iyOa5lvqZRR34",
    authDomain: "react-slack-9ba47.firebaseapp.com",
    projectId: "react-slack-9ba47",
    storageBucket: "react-slack-9ba47.appspot.com",
    messagingSenderId: "1092051718447",
    appId: "1:1092051718447:web:5420c6065801d0f09111da",
    measurementId: "G-000GCYPGY0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};