import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAmPgM5Kv7DAjTMwv_9dTttfNCQI0webhA",
  authDomain: "advmob2.firebaseapp.com",
  projectId: "advmob2",
  storageBucket: "advmob2.appspot.com",
  messagingSenderId: "4488580748",
  appId: "1:4488580748:web:ac46ce576cd4b98946f5a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider;
