import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCp2yM5_pNE8cBQ8fZppMbNL4J8aTRRA-o",
  authDomain: "chaton-3e609.firebaseapp.com",
  projectId: "chaton-3e609",
  storageBucket: "chaton-3e609.appspot.com",
  messagingSenderId: "441204462484",
  appId: "1:441204462484:web:0e91ea11d9ffafd1e63581",
  measurementId: "G-2CN2194R0C",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
