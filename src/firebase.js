import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpZkOzbWG8Ft_6Thge5ACSiao4QYpUDFE",
  authDomain: "know-your-ipo.firebaseapp.com",
  projectId: "know-your-ipo",
  storageBucket: "know-your-ipo.appspot.com",
  messagingSenderId: "11426291536",
  appId: "1:11426291536:web:005cafecc9f5d6b12f9655",
  measurementId: "G-H8MNN03Q6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
