// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBzvuIDVqpV_q4gJ8SiJwkY07onYeDfwKI",
  authDomain: "kata-app-83e08.firebaseapp.com",
  projectId: "kata-app-83e08",
  storageBucket: "kata-app-83e08.appspot.com",
  messagingSenderId: "359110477565",
  appId: "1:359110477565:web:e065bab5d7236313c2094",

};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
