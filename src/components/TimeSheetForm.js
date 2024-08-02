import React, { useState, useEffect } from "react";
import moment from "moment";
import Alert from "react-bootstrap/Alert";
import { TimesheetRow } from "./TimesheetRow";

const TimesheetForm = ({
  projects,
  onSubmit,
  successAlert,
  setSuccessAlert,
}) => {
  const [timesheetRows, setTimesheetRows] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(
    moment().format("MMMM YYYY")
  );
  const [currentProject, setProject] = useState("");

  useEffect(() => {
    const startDate = moment().startOf("month");
    const daysInMonth = moment().daysInMonth();

    const generateDays = () => {
      return Array.from({ length: daysInMonth }, (_, index) => ({
        date: startDate.clone().add(index, "days").toDate(),
        hours: "",
      }));
    };

    setTimesheetRows([
      {
        id: Date.now(),
        project: "",
        days: generateDays(),
        total: 0,
      },
    ]);
  }, [currentMonth]);

  const handleHoursChange = (rowId, index, value) => {
    setTimesheetRows(
      timesheetRows.map((row) => {
        if (row.id === rowId) {
          const updatedDays = row.days.map((day, dayIndex) =>
            dayIndex === index ? { ...day, hours: value } : day
          );
          const total = updatedDays.reduce(
            (sum, day) => sum + parseFloat(day.hours || 0),
            0
          );
          return { ...row, days: updatedDays, total };
        }
        return row;
      })
    );
  };

  useEffect(() => {
    successAlert && setTimesheetRows([]);
  }, [successAlert]);

  const handleRemoveRow = (rowId) => {
    setTimesheetRows(timesheetRows.filter((row) => row.id !== rowId));
  };

  const handleSubmit = (e) => {
    console.log(currentProject);
    e.preventDefault();
    timesheetRows[0].project = currentProject;
    const updatedTimeSheet = timesheetRows;

    console.log(updatedTimeSheet);
    setTimesheetRows(updatedTimeSheet);

    if (timesheetRows[0].total > 0 && currentProject) {
      onSubmit(timesheetRows);
    } else {
      alert("Please enter time and Project");
    }
  };
  console.log(timesheetRows);
  const handleMonthChange = (direction) => {
    setCurrentMonth((prevMonth) =>
      moment(prevMonth, "MMMM YYYY")
        .add(direction, "months")
        .format("MMMM YYYY")
    );
  };

  const daysInMonth = moment(currentMonth, "MMMM YYYY").daysInMonth();
  const days = Array.from({ length: daysInMonth }, (_, index) =>
    moment(currentMonth, "MMMM YYYY")
      .startOf("month")
      .add(index, "days")
      .format("DD")
  );

  return (
    <div className="panel panel-primary">
      <h2 className="mt-4 mb-4">Fill Timesheet for {currentMonth}</h2>
      <div className="panel-heading text-center">
        <div className="row ">
          <div className="col-md-12 d-flex ">
            <button
              type="button"
              className="btn btn-info mr-4"
              onClick={() => handleMonthChange(-1)}
            >
              <span className="glyphicon glyphicon-chevron-left ">﹤</span>
            </button>
            <h4 className="p-3">{currentMonth}</h4>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => handleMonthChange(1)}
            >
              <span className="glyphicon glyphicon-chevron-right ml-4">﹥</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-lg-3 mt-4">
        <h4>Select Project / Task</h4>
        <select
          className="form-control mt-4"
          onChange={(e) => {
            setSuccessAlert(false);
            setProject(e.target.value);
          }}
        >
          <option value="" disabled>
            Select Project and Task
          </option>
          {projects.map((project) => (
            <option key={project.name} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
      {successAlert && (
        <div className="d-flex  justify-content-center mt-4">
          <Alert width={"400px"} key={"primary"} variant={"primary"}>
            Your timesheet is successfully submitted !
          </Alert>
        </div>
      )}
      <div className="panel-body text-center">
        {timesheetRows.map((row) => (
          <TimesheetRow
            key={row.id}
            timesheet={row}
            onHoursChange={handleHoursChange}
            onRemove={handleRemoveRow}
          />
        ))}
      </div>
      <div className="panel-footer">
        <div className="row">
          <div className="col-md-1 col-lg-1 mt-4">
            <button
              type="button"
              className="btn btn-info"
              onClick={handleSubmit}
            >
              <span className="glyphicon glyphicon-floppy-open">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimesheetForm;
