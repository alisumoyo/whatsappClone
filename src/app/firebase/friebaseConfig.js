import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseInit';
import { getFirestore,collection,addDoc } from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword ,signInWithEmailAndPassword,collection,addDoc};
