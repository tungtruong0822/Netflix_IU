import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJp7Y7npMr7SvCEjcsbkUqcmGw9ogW4rQ",
  authDomain: "netflix-812bb.firebaseapp.com",
  projectId: "netflix-812bb",
  storageBucket: "netflix-812bb.appspot.com",
  messagingSenderId: "127500513523",
  appId: "1:127500513523:web:c23f2474119514aef6c786",
  measurementId: "G-G8VS50SKS5"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
