import { useEffect, useState } from "react";
import ExpenseForm from "./new-expense";
import Login from "./Auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Expenses from "./get-expense";

function Dashboard() {
  let [formSts, setFormSts] = useState(false);
  let [userModalSts, setUserModalSts] = useState(!auth.currentUser);

  const expenseFormStsTrue = () => {
    setFormSts(true);
  };
  const setModalStatusFalse = () => {
    setUserModalSts(false);
  };
  const expenseFormStsFalse = () => {
    setFormSts(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUserModalSts(false);
      } else {
        setUserModalSts(true);
      }
    });
  }, []);

  return (
    <div className=" max-w-5xl w-full">
      <section className=" w-full font-mono text-sm flex items-center justify-center bg-violet-400 rounded-lg mb-5">
        {formSts && <ExpenseForm expenseFormStsFalse={expenseFormStsFalse} />}

        {!formSts && (
          <button
            className=" bg-purple-950 m-5 sm:p-5 p-2 rounded-lg"
            onClick={expenseFormStsTrue}
          >
            Add New Expense
          </button>
        )}
      </section>
      <section className="mt-5 gap-3 flex bg-gray-900 rounded-lg">
        <div className="flex justify-between w-full">
          <p>Filter by year</p>
          <button>2020</button>
        </div>
        <div></div>
        <div className="h-250"></div>
      </section>

      <Expenses />

      {userModalSts && (
        <div className=" fixed left-1/2 top-1/2 z-50 flex h-screen w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-8 text-center text-black backdrop-blur-sm">
          <div className=" flex w-2/5 items-center justify-center rounded-2xl bg-white shadow-lg">
            <Login modalStatusFalse={setModalStatusFalse} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
