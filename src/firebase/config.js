 import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
 const firebaseConfig = {
  apiKey: "AIzaSyCi828jOfMkgeI4iGiqvUDMNxhexBoN228",
  authDomain: "fir-f1206.firebaseapp.com",
  projectId: "fir-f1206",
  storageBucket: "fir-f1206.appspot.com",
  messagingSenderId: "950323543025",
  appId: "1:950323543025:web:54a0a2f4903723806ca250",
  measurementId: "G-F4YKD56XE5"
};
  
  export default firebase.initializeApp(firebaseConfig)