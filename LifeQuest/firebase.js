// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz-FsRTkq9Fkasmz4bIQtklQ2mbKxBVhA",
  authDomain: "lifequest-69fc6.firebaseapp.com",
  projectId: "lifequest-69fc6",
  storageBucket: "lifequest-69fc6.firebasestorage.app",
  messagingSenderId: "625808990867",
  appId: "1:625808990867:web:61d6818c810efef414a366",
  measurementId: "G-LLR7HZ1K69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);