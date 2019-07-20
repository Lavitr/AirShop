import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAt8SE9oWTovRjk-Z16Bp7GawkeauScyS0",
    authDomain: "reduxasync.firebaseapp.com",
    databaseURL: "https://reduxasync.firebaseio.com",
    projectId: "reduxasync",
    storageBucket: "",
    messagingSenderId: "379189287450",
    appId: "1:379189287450:web:9ecdaf6b7cb5af34"
}

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export default databaseRef;