import { getExpenses } from "@/utils/crud";
import { useEffect, useState } from "react";

function Expenses() {
  let [expenseScreenshots, setexpenseScreenshots] = useState([]);

  useEffect(() => {
    getExpenses(setexpenseScreenshots);
  }, [expenseScreenshots]);
  return <div>hello{expenseScreenshots}</div>;
}

export default Expenses;
