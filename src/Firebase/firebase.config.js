// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2H5FVxr0uC9unLF1XnyhoctX4PoDkKXU",
  authDomain: "job-vista-client-project.firebaseapp.com",
  projectId: "job-vista-client-project",
  storageBucket: "job-vista-client-project.appspot.com",
  messagingSenderId: "678536905104",
  appId: "1:678536905104:web:262a0fe2778bf85d16f315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;