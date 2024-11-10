import { useEffect, useState } from "react";
import "../css/index.css";
import BudgetForm from "./BudgetForm";
import { createExpense, getAllExpenses } from "./services/api";
import { Expense } from "./types";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const data = await getAllExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleNewExpense = async (expenseData: Expense) => {
    await createExpense(expenseData);
    await fetchExpenses();
    const data = await getAllExpenses();
    setExpenses(data);
  };

  return (
    <>
      <BudgetForm onSubmit={handleNewExpense} />
    </>
  );
}
