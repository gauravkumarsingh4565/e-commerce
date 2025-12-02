import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGClARQ9WKlIcqXv0KCj3kFIhG5oMQEo8",
  authDomain: "e-commerce-application-412da.firebaseapp.com",
  projectId: "e-commerce-application-412da",
  storageBucket: "e-commerce-application-412da.firebasestorage.app",
  messagingSenderId: "635324227962",
  appId: "1:635324227962:web:c4a07169349d48417e36c3",
  measurementId: "G-GNEWJNTSVS",
  databaseURL:"https://e-commerce-application-412da-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;