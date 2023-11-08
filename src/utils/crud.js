import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import db, { auth } from "../../firebase";
import getYear from "./services";

export const addExpense = async (data) => {
  const payload = {
    id: auth.currentUser.uid,
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

export const getExpenses = async (setExpenses, setDateYear, selectedYear) => {
  try {
    const collectionRef = query(
      collection(db, "expense"),
      where("id", "==", auth.currentUser.uid)
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
