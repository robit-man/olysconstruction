import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSerwZLNewr430_HXR7la-aMndyA",
  authDomain: "vue-test-ec071.firebaseapp.com",
  projectId: "vue-test-ec071",
  storageBucket: "vue-test-ec071.appspot.com",
  messagingSenderId: "739052319423",
  appId: "1:739052319423:web:erwrwerewrwe"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }