
import { initializeApp, } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAisb_rvldlzGGaT5jUUmLY7L4kjJARmBU",
  authDomain: "e-com-1bf34.firebaseapp.com",
  projectId: "e-com-1bf34",
  storageBucket: "e-com-1bf34.firebasestorage.app",
  messagingSenderId: "458037274820",
  appId: "1:458037274820:web:fd4d7883d12499d3b18191",
  measurementId: "G-E3VDFVKZSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()