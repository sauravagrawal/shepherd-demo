import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBja9CMqJLTmxKd01lz2plf5jX6u2HJOYU",
  authDomain: "shepherd-new-project.firebaseapp.com",
  databaseURL: "https://shepherd-new-project-default-rtdb.firebaseio.com",
  projectId: "shepherd-new-project",
  storageBucket: "shepherd-new-project.appspot.com",
  messagingSenderId: "738325209932",
  appId: "1:738325209932:web:59e8423bc63761a57f25e9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;