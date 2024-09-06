// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2p5NQJxYdS_LK_cp570eRF4EMrIIAOu0",
  authDomain: "login-auth-20a2d.firebaseapp.com",
  projectId: "login-auth-20a2d",
  storageBucket: "login-auth-20a2d.appspot.com",
  messagingSenderId: "889044726913",
  appId: "1:889044726913:web:5160d1f3d76b6d85c44980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
