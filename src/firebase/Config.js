import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzezPL0j1aCQ9O4_iBbRrf77YYrtl2DF4",
  authDomain: "learningtech-750ee.firebaseapp.com",
  projectId: "learningtech-750ee",
  storageBucket: "learningtech-750ee.appspot.com",
  messagingSenderId: "828895338382",
  appId: "1:828895338382:web:3b325afe7908b8fe954edf"
};

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const timeStamp = firebase.firestore.Timestamp

export{projectFirestore, projectAuth , projectStorage, timeStamp}