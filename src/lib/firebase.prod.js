import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 //import { seedDatabase } from '../seed';


// Use your own config !!!
const config = {
  apiKey: "AIzaSyCMytfzmJrHbQPCJgL4SVVjfoZs-jtCt04",
    authDomain: "netflix-1f3eb.firebaseapp.com",
    projectId: "netflix-1f3eb",
    storageBucket: "netflix-1f3eb.appspot.com",
    messagingSenderId: "172058618823",
    appId: "1:172058618823:web:9ff7bbd6f40246f604c7e2"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
