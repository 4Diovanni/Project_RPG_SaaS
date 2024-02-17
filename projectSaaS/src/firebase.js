import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAS2H5q2CBo848i2CLcFufdWR_R88kfUb4",
  authDomain: "fir-saas-4b22e.firebaseapp.com",
  projectId: "fir-saas-4b22e",
  storageBucket: "fir-saas-4b22e.appspot.com",
  messagingSenderId: "617335050459",
  appId: "1:617335050459:web:55d12299810f487711bcfe",
  measurementId: "G-KC4E3SWJ5Y"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);


const Firebase = {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  storage
};

export default Firebase;


