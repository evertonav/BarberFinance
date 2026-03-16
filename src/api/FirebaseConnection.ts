import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCpQDg-QETbMT486NZaocXJYgsiRpoSQYI',
  authDomain: 'barber-finance-8fe5b.firebaseapp.com',
  projectId: 'barber-finance-8fe5b',
  storageBucket: 'barber-finance-8fe5b.firebasestorage.app',
  messagingSenderId: '512103504007',
  appId: '1:512103504007:web:c993ed6372c205f495c022',
  measurementId: 'G-1C0623HTH2',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
