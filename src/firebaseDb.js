import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCZr0QzHab2bAZ_H8Rvoph9lhfYQjK9Vdo",
  authDomain: "si-21-class.firebaseapp.com",
  projectId: "si-21-class",
  storageBucket: "si-21-class.appspot.com",
  messagingSenderId: "81024452767",
  appId: "1:81024452767:web:5503fc1ee53bcd4c1cfaaa",
  measurementId: "G-FPGHCGVSXS"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;