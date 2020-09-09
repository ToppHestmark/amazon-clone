import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcUoSZZnEH0OXwX4Y93xgkPBS9tDYFoq4",
  authDomain: "clone-e0df5.firebaseapp.com",
  databaseURL: "https://clone-e0df5.firebaseio.com",
  projectId: "clone-e0df5",
  storageBucket: "clone-e0df5.appspot.com",
  messagingSenderId: "807907159886",
  appId: "1:807907159886:web:df83ee381c72637a4c781f",
  measurementId: "G-VHVN3MDV5N"
})

const auth = firebase.auth();

export { auth };