import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdJrW0kIkqqITs9CCAh_rDPdIa-en46wc",
  authDomain: "emart-7e3df.firebaseapp.com",
  databaseURL: "https://emart-7e3df-default-rtdb.firebaseio.com",
  projectId: "emart-7e3df",
  storageBucket: "emart-7e3df.appspot.com",
  messagingSenderId: "847099330866",
  appId: "1:847099330866:web:fc856f9190dbe920dd172b",
  measurementId: "G-H4V7H3Z60P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;

