import App from "@/pages/_app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCJXy7mGeVAOUm5Hg1uH18h-N4O2pHD0Zo",
    authDomain: "soulbot-2d05f.firebaseapp.com",
    projectId: "soulbot-2d05f",
    storageBucket: "soulbot-2d05f.appspot.com",
    messagingSenderId: "728342904536",
    appId: "1:728342904536:web:cf4e9c5f771996340061ad",
    measurementId: "G-1SE79B3JDV"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(App);