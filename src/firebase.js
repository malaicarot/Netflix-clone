import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import 'firebase/compat/app/dist/'
const app = firebase.initializeApp({
  apiKey: "AIzaSyCWAUZpn3V9G2VzPL41Jo_J5RGt1Fn_C-g",
  authDomain: "react-clone-project-7b14f.firebaseapp.com",
  projectId: "react-clone-project-7b14f",
  storageBucket: "react-clone-project-7b14f.appspot.com",
  messagingSenderId: "222742120034",
  appId: "1:222742120034:web:04ff78448320eb6892f33b"
});

export const db = firebase.firestore();
export const auth = app.auth();
export default app;

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// });

// export const auth = app.auth;
// export const db = firebase.firestore();
// export const provider = new firebase.auth.GoogleAuthProvider();

// export default app;
