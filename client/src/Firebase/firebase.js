import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBdqe76Q2pHZy8Ly9TUpSpbhrrQ96oK4KM",
    authDomain: "food-bang.firebaseapp.com",
    projectId: "food-bang",
    storageBucket: "food-bang.appspot.com",
    messagingSenderId: "179309571396",
    appId: "1:179309571396:web:381fcaff215c9193cdbb11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;




