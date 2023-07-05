import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore, collection, writeBatch, query, getDocs } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJXpdGbTlMCFBADZIS-Cu-bNBfe1d8xFU",
  authDomain: "shopping-website-9a4c5.firebaseapp.com",
  projectId: "shopping-website-9a4c5",
  storageBucket: "shopping-website-9a4c5.appspot.com",
  messagingSenderId: "1076019970829",
  appId: "1:1076019970829:web:b7eead369268ec4f546644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =  getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const createUserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const authListener = (callback) => onAuthStateChanged(auth, callback);
export const getRedirectR = () => getRedirectResult(auth);

export const signOutUser = () => signOut(auth);

const db = getFirestore(app);

export const createUser = async (userAuth, addInfos = {}) => {
    const { displayName, email } = userAuth;
    const userReference = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userReference);
    const createdAt = new Date();

    if(!userSnapshot.exists()) {
      try {
        setDoc(userReference, {
          createdAt,
          displayName,
          email,
          ...addInfos
        })
      } 
      catch(error) {
        console.log(error);
      }
    }

    return userReference;

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

}