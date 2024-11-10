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
