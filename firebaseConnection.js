import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDF90Xb8Zy7s_oGYHkyNyEZjxu3bNNPP2U",
    authDomain: "curso-50812.firebaseapp.com",
    projectId: "curso-50812",
    storageBucket: "curso-50812.appspot.com",
    messagingSenderId: "987870473495",
    appId: "1:987870473495:web:edede94571c96927df1b52",
    measurementId: "G-1TPXRPH1H5"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export {db, auth};