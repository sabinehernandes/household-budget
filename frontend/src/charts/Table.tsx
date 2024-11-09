import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useState } from "react";

interface IRow {
  date: string;
  paidBy: string;
  category: string;
  description: string;
  amount: number;
}

export default function Table() {
  const [rowData, setRowData] = useState<IRow[]>([
    {
      date: "01/05/2024",
      paidBy: "Sabine",
      category: "house",
      description: "rent",
      amount: 12000,
    },
    {
      date: "01/02/2024",
      paidBy: "Sabine",
      category: "restaurant",
      description: "Mapu Baos",
      amount: 600,
    },
  ]);

  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "date" },
    { field: "paidBy" },
    { field: "category" },
    { field: "description" },
    { field: "amount" },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };

  return (
    <div className="ag-theme-quartz m-10" style={{ height: "400px" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
