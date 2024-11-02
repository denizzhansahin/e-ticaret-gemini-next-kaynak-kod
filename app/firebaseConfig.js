// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase yapılandırması


  // Firebase yapılandırması
const firebaseConfig = {
  apiKey: "qq",
  authDomain: "q.firebaseapp.com",
  databaseURL: "q.firebaseio.com",
  projectId: "q-q",
  storageBucket: "q-q.appspot.com",
  messagingSenderId: "q",
  appId: "1q",
  measurementId: "q"
};

// Initialize Firebase
const app_firebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app_firebase