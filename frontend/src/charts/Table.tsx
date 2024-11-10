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
    <div className="ag-theme-quartz m-10" style={{ height: "400px" }}>
      <AgGridReact
        rowData={expenses}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        onRowClicked={(e) => handleRowClick(e.data)}
      />{" "}
      {selectedRow && (
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      )}
    </div>
  );
}
