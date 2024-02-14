import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth'; // Adicione esta linha para importar o método signInWithPopup
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

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

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider }; // Certifique-se de exportar signInWithPopup

