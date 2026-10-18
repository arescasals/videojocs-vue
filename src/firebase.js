import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCdwnmMXu9HqLIgI0ZF84i0mDsA5fUw-RY",
  authDomain: "videojocs-ares.firebaseapp.com",
  projectId: "videojocs-ares",
  storageBucket: "videojocs-ares.firebasestorage.app",
  messagingSenderId: "981399041087",
  appId: "1:981399041087:web:c956f89d07d67fa486348a"// AQUÍ VAN LES TEVES DADES (les canviem al pas següent)
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)