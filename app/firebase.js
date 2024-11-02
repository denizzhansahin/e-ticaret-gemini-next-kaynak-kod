// Firebase modüllerini import edin
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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

// Firebase'i başlatın
const app = initializeApp(firebaseConfig);

// Realtime Database'e erişim sağlayın
const database = getDatabase(app);

export { database };
