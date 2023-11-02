import { useState } from "react";
import ExpenseForm from "./new-expense";

function Dashboard() {
  let [formSts, isFormSts] = useState(false);

  const expenseFormStsTrue = () => {
    isFormSts(true);
  };
  const expenseFormStsFalse = () => {
    isFormSts(false);
  };
  return (
    <div className=" max-w-5xl w-full">
      <section className=" w-full font-mono text-sm flex items-center justify-center bg-violet-400 rounded-lg mb-5">
        {formSts && <ExpenseForm formCancel={expenseFormStsFalse} />}

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
    </div>
  );
}

export default Dashboard;
