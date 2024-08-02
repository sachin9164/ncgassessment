import React, { useState, useEffect } from "react";
import moment from "moment";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const TimesheetRow = ({ timesheet, onHoursChange }) => (
  <div className="row">
    <div className="row">
      {days.map((day) => {
        return (
          <h4 className="col-sm-1 col-lg-1 mt-2 " style={{ width: "13%" }}>
            {day}
          </h4>
        );
      })}
    </div>
    <div className="row">
      {timesheet.days.map((day, index) => (
        <div
          key={index}
          className="col-sm-1 col-lg-1 mt-1"
          style={{ width: "13.333%" }}
        >
          <p>{moment(day.date).format("DD")}</p>
          <div className="input-group">
            <input
              type="number"
              min={1}
              max={24}
              className="form-control"
              value={day.hours}
              onChange={(e) => {
                if (e.target.value < 25) {
                  onHoursChange(timesheet.id, index, e.target.value);
                } else {
                  alert("Enter hours between 1 to 24 hours");
                }
              }}
              placeholder={index % 7 === 0 ? "Holiday" : `Enter hours`}
              disabled={index % 7 === 0 ? true : false}
              required={true}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="col-md-3 col-lg-3 mt-2">
      {timesheet.total > 0 && (
        <button type="button" className="btn btn-success form-control">
          {timesheet.total} total hours
        </button>
      )}
    </div>
  </div>
);
