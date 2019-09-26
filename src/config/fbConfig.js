import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDQRyDdGoL_AJoGrltQkp9ZwJN0YWFA6zY",
    authDomain: "react-redux-message-boar-33c15.firebaseapp.com",
    databaseURL: "https://react-redux-message-boar-33c15.firebaseio.com",
    projectId: "react-redux-message-boar-33c15",
    storageBucket: "",
    messagingSenderId: "366050809023",
    appId: "1:366050809023:web:3ce42ac5a4e3d7e0ae220a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;