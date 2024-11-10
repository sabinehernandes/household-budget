import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useState } from "react";

interface IRow {
  createdAt: string;
  paidBy: string;
  categoryName: string;
  description: string;
  amount: number;
}

interface TableProps {
  expenses: IRow[];
}

export default function Table({ expenses }: TableProps) {
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
      />
    </div>
  );
}
