import React, { useContext } from "react";
import { CSVLink } from "react-csv";
import { StudentContext } from "../App";


export const Export = () => {
  const [students] = useContext(StudentContext)
  const headers = [
    { label: "id", key: "id" },
    { label: "name", key: "name" },
    { label: "age", key: "age" },
    { label: "class", key: "class" },
    { label: "status", key: "status" },
    { label: "createdAt", key: "createdAt" },
    { label: "updatedAt", key: "updatedAt" },
  ];
  const csvReport = {
    headers,
    title: "Students Data",
    data: students,
  };

  return (
    <div>
      <button className="secondary">
        <CSVLink {...csvReport} filename='Student-data.csv'>Export Students Data</CSVLink>
      </button>
    </div>
  );
};
