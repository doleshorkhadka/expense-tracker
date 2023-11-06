import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import db from "../../firebase";
import { v4 } from "uuid";

export const addExpense = async (data) => {
  const payload = {
    id: v4(),
    ...data,
  };
  console.log("====================================");
  console.log(payload);
  console.log("====================================");
  try {
    await addDoc(collection(db, "expense"), payload);
  } catch (error) {
    console.error(error);
  }
};

export const deleteExpense = async (id) => {
  try {
    //👇🏻 deletes the category
    await deleteDoc(doc(db, "expense", id));
  } catch (err) {
    console.log(err);
  }
};

export const getExpenses = async (setExpenses) => {
  try {
    const collectionRef = collection(db, "expense");
    const querySnapshot = await getDocs(collectionRef);

    console.log("====================================");
    console.log(querySnapshot.docs);
    console.log("====================================");
    // (doc) => {
    //   const docs = [];
    //   doc.forEach((d) => {
    //     docs.push({ ...d.data(), id: d.id });
    //   });
    //   setExpenses(docs);
    // };
  } catch (err) {
    console.error(err);
    setExpenses([]);
  }
};
