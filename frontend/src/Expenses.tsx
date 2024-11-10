import React, { useState, useEffect } from "react";
import { getAllExpenses } from "./services/api";
import Table from "./charts/Table";

export default function ExpensesList() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllExpenses();
        setExpenses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Table expenses={expenses} />
    </>
  );
}
