import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';


const firebaseConfig = {
    apiKey: "AIzaSyBj58K0NGW46CB-Hun_4ILHxa_rfnkDz1o",
    authDomain: "journal-app-98a41.firebaseapp.com",
    databaseURL: "https://journal-app-98a41.firebaseio.com",
    projectId: "journal-app-98a41",
    storageBucket: "journal-app-98a41.appspot.com",
    messagingSenderId: "196811289325",
    appId: "1:196811289325:web:3344743ea812666e3092e4"
  };

const firebaseConfigTesting = {
    apiKey: "AIzaSyCofFeQBBR5G3BU953QpxlD5w5lRTtkDFE",
    authDomain: "journal-testing-7b27e.firebaseapp.com",
    databaseURL: "https://journal-testing-7b27e.firebaseio.com",
    projectId: "journal-testing-7b27e",
    storageBucket: "journal-testing-7b27e.appspot.com",
    messagingSenderId: "260103213505",
    appId: "1:260103213505:web:1eaef61cee48de664a1f40"
  };

if (process.env.NODE_ENV === 'test') {
    //test env
    firebase.initializeApp(firebaseConfigTesting);
} else {
    // develop env
    firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}