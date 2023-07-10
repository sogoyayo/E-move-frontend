// Create a new Date object
const date = new Date();

// Get the day of the week as a string
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayOfWeek = daysOfWeek[date.getDay()];

// Get the day of the month
const dayOfMonth = date.getDate();

// Get the hour and minute in 12-hour format
const hour = date.getHours() % 12;
const minute = date.getMinutes();

// Determine if it's AM or PM
const amPm = date.getHours() < 12 ? 'AM' : 'PM';

// Create a suffix for the day of the month (e.g., "st", "nd", "rd", "th")
let dayOfMonthSuffix;
if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
  dayOfMonthSuffix = 'st';
} else if (dayOfMonth === 2 || dayOfMonth === 22) {
  dayOfMonthSuffix = 'nd';
} else if (dayOfMonth === 3 || dayOfMonth === 23) {
  dayOfMonthSuffix = 'rd';
} else {
  dayOfMonthSuffix = 'th';
}

// Format the date string
export const dateString = `${dayOfWeek} ${dayOfMonth}${dayOfMonthSuffix} - ${hour}:${minute.toString().padStart(2, '0')}${amPm}`;


