import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import db, { auth } from "../../firebase";
import getYear from "./services";

export const addExpense = async (data) => {
  const payload = {
    userId: auth.currentUser.uid,
    ...data,
  };
  console.log("==============payload======================");
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
    //👇🏻 deletes the expense
    await deleteDoc(doc(db, "expense", id));
  } catch (err) {
    console.log(err);
  }
};

export const getExpenses = async (setExpenses, setDateYear, selectedYear) => {
  try {
    const collectionRef = query(
      collection(db, "expense"),
      where("userId", "==", auth.currentUser.uid)
    );
    onSnapshot(collectionRef, (snapshot) => {
      let docs = [];
      let year = ["All"];
      snapshot.docs.map((doc) => {
        let yearValue = getYear(doc.data().date);
        if (!selectedYear) selectedYear = "All";
        if (selectedYear == "All" || yearValue == selectedYear) {
          docs.push({ ...doc.data(), id: doc.id });
        }

        if (year.indexOf(yearValue) == -1) year.push(yearValue);
      });
      setExpenses(docs);

      setDateYear(year);
    });
  } catch (err) {
    console.error(err);
    setExpenses([]);
  }
};

export const editExpense = async (id, data) => {
  try {
    //👇🏻 update the expense
    await updateDoc(doc(db, "expense", id), data);
  } catch (err) {
    console.log(err);
  }
};
