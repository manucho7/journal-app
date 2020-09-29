import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyCofFeQBBR5G3BU953QpxlD5w5lRTtkDFE",
//     authDomain: "journal-testing-7b27e.firebaseapp.com",
//     databaseURL: "https://journal-testing-7b27e.firebaseio.com",
//     projectId: "journal-testing-7b27e",
//     storageBucket: "journal-testing-7b27e.appspot.com",
//     messagingSenderId: "260103213505",
//     appId: "1:260103213505:web:1eaef61cee48de664a1f40"
//   };

// if (process.env.NODE_ENV === 'test') {
//     //test env
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
//     // develop env
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}