import { useEffect, useState } from "react";
import ExpenseForm from "./new-expense";
import Login from "./Auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import ExpenseCard from "./expense-card";
import { getExpenses } from "@/utils/crud";

const Dashboard = () => {
  let [formSts, setFormSts] = useState(false);
  let [userModalSts, setUserModalSts] = useState(!auth.currentUser);
  let [expenseScreenshots, setExpenseScreenshots] = useState([]);
  let [yearOptions, setYearOptions] = useState([]);
  let [selectedYear, setSelectedYear] = useState(yearOptions[0]);
  let [data, setData] = useState();
  let [isEditMode, setIsEditMode] = useState();

  const expenseFormStsTrue = (data) => {
    setFormSts(true);
    setIsEditMode(false);
    setData(data);
  };

  const setModalStatusFalse = () => {
    setUserModalSts(false);
  };
  const expenseFormStsFalse = () => {
    setFormSts(false);
  };

  const setIsEditModeFalse = () => {
    setFormSts(true);
    setIsEditMode(true);
  };

  const onChangeSelectedYear = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUserModalSts(false);
        getExpenses(setExpenseScreenshots, setYearOptions, selectedYear);
      } else {
        // User is not signed in
        setUserModalSts(true);
      }
    });
  }, [selectedYear]);

  return (
    <div className=" max-w-5xl w-full">
      <section className=" w-full font-mono text-sm flex items-center justify-center bg-violet-400 rounded-lg mb-5">
        {formSts && (
          <ExpenseForm
            expenseFormStsFalse={expenseFormStsFalse}
            data={data}
            isEditMode={isEditMode}
          />
        )}

        {!formSts && (
          <button
            className=" bg-purple-950 m-5 sm:p-5 p-2 font-bold text-lg rounded-lg"
            onClick={setIsEditModeFalse}
          >
            Add New Expense
          </button>
        )}
      </section>

      <section className="mt-5 flex flex-col bg-gray-950 rounded-lg">
        <div className="flex justify-between w-full p-6">
          <p className="font-bold text-lg">Filter by year</p>

          <select
            defaultValue={selectedYear}
            value={selectedYear}
            className=" mx-2 w-32 p-2 text-center rounded-lg font-bold border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeSelectedYear}
            disabled={yearOptions.length == 0}
          >
            {yearOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div></div>
        <div className="h-250"></div>
        {expenseScreenshots.map((d) => {
          return (
            <ExpenseCard
              key={d.id}
              data={d}
              expenseFormStsTrue={expenseFormStsTrue}
            />
          );
        })}
      </section>

      {userModalSts && (
        <div className=" fixed left-1/2 top-1/2 z-50 flex h-screen w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-8 text-center text-black backdrop-blur-sm">
          <div className=" flex w-2/5 items-center justify-center rounded-2xl bg-white shadow-lg">
            <Login modalStatusFalse={setModalStatusFalse} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
