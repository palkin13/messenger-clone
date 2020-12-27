import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAXV7mp7-60Q07KVSMZ9WY0Nwj4DXHB5Y8",
    authDomain: "messenger-clone-54b7c.firebaseapp.com",
    projectId: "messenger-clone-54b7c",
    storageBucket: "messenger-clone-54b7c.appspot.com",
    messagingSenderId: "885431410012",
    appId: "1:885431410012:web:8d464d7880c3c1a39e7599",
    measurementId: "G-WY9SXWKLEP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
//const auth = firebase.auth();

export {db};
export default firebase;

