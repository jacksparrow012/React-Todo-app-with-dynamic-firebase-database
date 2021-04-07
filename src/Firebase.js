import firebase from "firebase";
const firebaseApp = firebase.initializeApp({    

    apiKey: "AIzaSyC9Hp1NWA5SSNQsQJPYZrfDusfvdq1sJEs",
    authDomain: "todo-app-9ba8d.firebaseapp.com",
    databaseURL: "https://todo-app-9ba8d-default-rtdb.firebaseio.com",
    projectId: "todo-app-9ba8d",
    storageBucket: "todo-app-9ba8d.appspot.com",
    messagingSenderId: "466599700546",
    appId: "1:466599700546:web:9779c7d831d0e6c89f65db",
    measurementId: "G-90XKRC07C8"

})
const db = firebaseApp.firestore()
export default db;  