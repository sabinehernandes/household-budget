import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useState } from "react";
import { deleteExpense } from "../services/api";

interface IRow {
  id: string;
  createdAt: string;
  paidBy: string;
  categoryName: string;
  description: string;
  amount: number;
}

interface TableProps {
  expenses: IRow[];
  fetchExpenses: () => void;
}

export default function Table({ expenses, fetchExpenses }: TableProps) {
  const [selectedRow, setSelectedRow] = useState<IRow | null>(null);

  const handleRowClick = (row: IRow) => {
    setSelectedRow(row);
  };

  const handleDelete = async () => {
    if (selectedRow) {
      try {
        console.log("exp id ", selectedRow.id);
        console.log("row", selectedRow);
        await deleteExpense(selectedRow.id);
        fetchExpenses();
        setSelectedRow(null);
      } catch (error) {
        console.error("Failed: ", error);
        alert("Error deleting expense. Try again later");
      }
    }
  };

  const [colDefs] = useState<ColDef<IRow>[]>([
    { field: "createdAt" },
    { field: "paidBy" },
    { field: "categoryName" },
    { field: "description" },
    { field: "amount" },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };

  return (
    <>
      <div className="bg-slate-100 rounded-md m-10 p-10 leading-relaxed">
        <h2 className="text-4xl text-gray-700 font-bold tracking-wide text-center">
          All Expenses
        </h2>

        <div className="ag-theme-quartz m-10" style={{ height: "500px" }}>
          <AgGridReact
            rowData={expenses}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            onRowClicked={(e) => handleRowClick(e.data)}
          />{" "}
          {selectedRow && (
            <button
              onClick={handleDelete}
              className="rounded-md mt-6 bg-white px-2.5 py-1.5 font-semibold text-red-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-700 hover:ring-red-700 hover:text-white"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </>
  );
}
