import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVCq1qQV6parPt6NX7V2mqU_s_v9osbVo",
  authDomain: "toytopia-98f4f.firebaseapp.com",
  projectId: "toytopia-98f4f",
  storageBucket: "toytopia-98f4f.firebasestorage.app",
  messagingSenderId: "978591217891",
  appId: "1:978591217891:web:40780769eb7f8bebc9add6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;