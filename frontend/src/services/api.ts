import { Expense } from "../types";

const URL = "http://localhost:3000/api/expenses";

export async function getAllExpenses() {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("Failed to get all expenses");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching expenses: ", error);
  }
}

export async function createExpense(expenseData: Expense) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });
    console.log("data: ", expenseData);

    if (!response.ok) throw new Error("Failed to create expense");
    return await response.json();
  } catch (error) {
    console.error("Error creating expense:", error);
    throw error;
  }
}

export async function deleteExpense(expenseId: string) {
  try {
    const response = await fetch(`${URL}/${expenseId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete expense");
    return;
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
}
