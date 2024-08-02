import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeData({ setSubmit }) {
  const [timesheets, setTimesheets] = useState([]);

  useEffect(() => {
    setSubmit(true);
    axios.get("http://localhost:8000/timesheets").then((response) => {
      setTimesheets(response.data);
    });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Serial No</th>
          <th>Project</th>
          <th>Duration/hours</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {timesheets.map((timesheet, index) => {
          return (
            <tr key={timesheet[0].id}>
              <td>{index + 1}</td>
              <td>{timesheet[0].project}</td>
              <td>{timesheet[0].total}</td>
              <td>{timesheet[0].id}</td>
              <td>Not Approved</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default EmployeeData;
