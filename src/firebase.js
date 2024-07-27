import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD00hWuBqSfEr9R9BUrkvDJ2SNhKCym974",
  authDomain: "netflix-clone-e0eb1.firebaseapp.com",
  projectId: "netflix-clone-e0eb1",
  storageBucket: "netflix-clone-e0eb1.appspot.com",
  messagingSenderId: "534371665893",
  appId: "1:534371665893:web:0fa809697a268c957c110c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async(name, email, password)=>{
    try {
      const res =   await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await addDoc(collection(db, 'user'),{
        uid:user.uid,
        name,
        authProvider: 'local',
        email,
      });
    } catch (error) {
        console.log(error)
        alert(error);
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
        
    }
}

const logout = async ()=>{
    signOut(auth);
}

export {auth,db, login, signup, logout};