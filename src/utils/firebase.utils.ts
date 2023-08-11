import { initializeApp } from "firebase/app";
import { getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
  NextOrObserver,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore, collection, writeBatch, query, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import { Category } from "../store/categories/categories.types";

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

export const signInWithEmail = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export const createUserWithEmail = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const authListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);
export const getRedirectR = () => getRedirectResult(auth);

export const signOutUser = () => signOut(auth);

const db = getFirestore(app);

export type AdditionalInfos = {
  displayName?: string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const createUser = async (userAuth: User, addInfos = {} as AdditionalInfos): Promise<void | QueryDocumentSnapshot<UserData>> => {
    
    if (!userAuth) return;
    const userReference = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userReference);


    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

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

    return userSnapshot as QueryDocumentSnapshot<UserData>;

}

export type ObjectToAdd = {
  title: string;
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd >(collectionKey: string, objectsToAdd: T[]): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
}

export const getCategoriesAndDocuments = async (collectionKey: string): Promise<Category[]> => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);

}

export const getCurrentUser = (): Promise<null | User> => {
  return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (userAuth) => {
          unsubscribe();
          resolve(userAuth);
        },
        reject
      )
    })
  }