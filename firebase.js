import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC_IyjRR8f1XbMEM7uTWJ7_9epjrwtfRk",
  authDomain: "idoevents-4e97f.firebaseapp.com",
  projectId: "idoevents-4e97f",
  storageBucket: "idoevents-4e97f.appspot.com",
  messagingSenderId: "1041173369166",
  appId: "1:1041173369166:web:370919a44fd4932a774e1f",
  measurementId: "G-3EK82011HP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export the auth and db instances
export { auth, db };
