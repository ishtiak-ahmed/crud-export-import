import React, { useContext } from "react";
import { CSVLink } from "react-csv";
import { StudentContext } from "../App";


export const Export = () => {
  const [students] = useContext(StudentContext)
  const headers = [
    { label: "id", key: "id" },
    { label: "name", key: "name" },
    { label: "grade", key: "grade" },
    { label: "shift", key: "shift" },
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
