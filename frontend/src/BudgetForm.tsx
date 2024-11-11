import { useEffect, useState } from "react";
import { createExpense, getAllExpenses } from "./services/api";
import Table from "./charts/Table";
import toast, { Toaster } from "react-hot-toast";

export default function BudgetForm({ onSubmit }) {
  const [expenses, setExpenses] = useState([]);
  const [date, setDate] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | "">("");

  const fetchExpenses = async () => {
    const data = await getAllExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!date || !paidBy || !categoryName || !amount) {
      toast.error("Please fill in all required fields");
      return;
    }

    const expenseData = {
      createdAt: date,
      paidBy,
      categoryName,
      description,
      amount: Number(amount),
    };

    try {
      const newExpense = await createExpense(expenseData);
      if (newExpense) {
        toast.success("Expense successfully added");
        fetchExpenses();
      }
      setDate("");
      setPaidBy("");
      setCategoryName("");
      setDescription("");
      setAmount("");
    } catch (error) {
      toast.error("Error creating expense. Try again later.");
    }
  };

  return (
    <>
      <Toaster />
      <section className="budget-form bg-slate-100 m-10 p-10 rounded-md leading-relaxed">
        <h1 className="text-5xl text-gray-700 font-bold tracking-wide text-center">
          Household Budget
        </h1>
        <form className="text-gray-700 text-xl my-8" onSubmit={handleSubmit}>
          <fieldset className="my-4">
            <label htmlFor="date" className="font-medium">
              Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="shadow-sm ring-1 ring-inset ring-gray-300 p-1.5 text-lg rounded-sm"
              />
            </div>
          </fieldset>
          <fieldset className="mb-4">
            <label htmlFor="person" className="font-medium">
              Paid by
            </label>
            <div className="mt-2">
              <input
                type="radio"
                name="person"
                id="sabine"
                value="Sabine"
                onChange={(e) => setPaidBy(e.target.value)}
                checked={paidBy === "Sabine"}
              />
              <label htmlFor="sabine" className="ml-3">
                Sabine
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="person"
                id="beatriz"
                value="Beatriz"
                onChange={(e) => setPaidBy(e.target.value)}
                checked={paidBy === "Beatriz"}
              />
              <label htmlFor="beatriz" className="ml-3">
                Beatriz
              </label>
            </div>
          </fieldset>
          <fieldset className="mb-4">
            <p className="font-medium">Category</p>
            <select
              name="category"
              id="category"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="shadow-sm ring-1 ring-inset ring-gray-300 p-1.5 text-lg rounded-sm mt-2"
            >
              <option value="select">--select an option--</option>
              <option value="Housing">Housing</option>
              <option value="Groceries">Groceries</option>
              <option value="Restaurants">Restaurants</option>
              <option value="Clothing">Clothing</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Subscriptions">Subscriptions</option>
              <option value="Transport">Transport</option>
            </select>
          </fieldset>
          <fieldset className="mb-9">
            <p className="font-medium">Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow-sm ring-1 ring-inset ring-gray-300 p-1.5 text-lg rounded-sm mt-2"
            ></textarea>
          </fieldset>
          <fieldset className="mb-9">
            <p className="font-medium">Amount (SEK)</p>
            <input
              type="number"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value ? Number(e.target.value) : "")
              }
              className="shadow-sm ring-1 ring-inset ring-gray-300 p-1.5 text-lg rounded-sm mt-2"
            />
          </fieldset>
          <button
            type="submit"
            className="rounded-md bg-white px-2.5 py-1.5 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-150"
          >
            Submit
          </button>
        </form>
      </section>
      <Table expenses={expenses} fetchExpenses={fetchExpenses} />
    </>
  );
}
