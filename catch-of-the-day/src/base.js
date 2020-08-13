import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database'

 const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCY861ki_D7cSu_VTb2qHgAg_Q9CMknYi0",
        authDomain: "catch-of-the-day-jacob-hensley.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-jacob-hensley.firebaseio.com"
      })

      const base = Rebase.createClass(firebaseApp.database());

    //   This is a named export 
      export { firebaseApp };

    //   This is a default export 
    export default base;