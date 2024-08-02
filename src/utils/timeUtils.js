/**
 * Calculates the difference in hours between two times in HH:MM format.
 * @param {string} startTime - The start time in HH:MM format.
 * @param {string} endTime - The end time in HH:MM format.
 * @returns {number} - The difference in hours as a decimal.
 */
export const calculateTimeDifference = (startTime, endTime) => {
  // Parse the time strings into hours and minutes
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [endHours, endMinutes] = endTime.split(":").map(Number);

  // Calculate the difference in hours and minutes
  let diffInHours = endHours - startHours;
  let diffInMinutes = endMinutes - startMinutes;

  // Adjust if the minutes difference is negative
  if (diffInMinutes < 0) {
    diffInHours -= 1;
    diffInMinutes += 60;
  }

  // Convert the difference to a decimal hour format
  const totalDiffInHours = diffInHours + diffInMinutes / 60;

  return totalDiffInHours;
};

export const formatDateToMonthYear = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
