import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TimesheetForm from "./components/TimeSheetForm";
import NavBar from "./components/NavBar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import EmployeeData from "./components/Table";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [submitTimeSheet, setSubmit] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => {
        console.log(error);
        setProjects([]);
      });
  }, [submitTimeSheet]);

  const handleTimesheetSubmit = (data) => {
    fetch("http://localhost:8000/timesheets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
        setSuccessAlert(true);
      })
      .then((result) => console.log(result));
  };

  return (
    <>
      <NavBar />

      <div className="container">
        <Tabs
          defaultActiveKey="timesheet"
          id="uncontrolled-tab-example"
          className="mb-3 mt-2"
        >
          <Tab eventKey="timesheet" title="Timesheet">
            <TimesheetForm
              projects={projects}
              onSubmit={handleTimesheetSubmit}
              successAlert={successAlert}
              setSuccessAlert={setSuccessAlert}
            />
          </Tab>
          <Tab eventKey="submit" title="Timesheet History">
            <EmployeeData setSubmit={setSubmit} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
