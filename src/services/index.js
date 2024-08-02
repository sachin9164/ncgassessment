import axios from "axios";

/**
 * Submits timesheet data to the server.
 * @param {string} projectId - The ID of the project.
 * @param {Object} timesheetData - The timesheet data to submit.
 * @returns {Promise} - A promise that resolves with the server response or rejects with an error.
 */
export const submitTimesheet = (projectId, timesheetData) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:8000/timesheets", { projectId, timesheetData })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

/**
 * Fetches the list of projects from the server.
 * @returns {Promise} - A promise that resolves with the server response or rejects with an error.
 */
export const fetchProjects = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:8000/projects")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
