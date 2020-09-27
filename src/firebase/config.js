import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDKyzUbcUbYOfNC2ahxtwBSYs_JYwXknbI',
  authDomain: 'torchlight-fbb24.firebaseapp.com',
  databaseURL: 'https://torchlight-fbb24.firebaseio.com',
  projectId: 'torchlight-fbb24',
  storageBucket: 'torchlight-fbb24.appspot.com',
  messagingSenderId: '75152020837',
  appId: '1:75152020837:web:5aa10aeb72230e4832bd8c',
  measurementId: 'G-N919L554YB'
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
