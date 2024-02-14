import { useState,useEffect } from "react";
import { db } from "../firebaseConfig";
import {
    collection,
    onSnapshot,
    query,
    updateDoc,
    doc,
    addDoc,
    deleteDoc,
  } from 'firebase/firestore';
  
const useFirestoreCollection = (collectionName) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const q = query(collection(db, collectionName));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let myArr = [];
        querySnapshot.forEach((doc) => {
          myArr.push({ ...doc.data(), id: doc.id });
        });
  
        // Sort the data alphabetically
        myArr.sort((a, b) => a.name.localeCompare(b.name));
  
        setData(myArr);
      });
  
      return () => unsubscribe();
    }, [collectionName]);
  
    return data;
  };
export default useFirestoreCollection  