const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const form = document.getElementById("form");
const errorDay = document.getElementById("error-day");
const errorMonth = document.getElementById("error-month");
const errorYear = document.getElementById("error-year");

// DAY ERROR MESSAGES
form.addEventListener("submit", (e) => {
  let dayErrorMessage = "";

  if (day.value === "") {
    dayErrorMessage = "This field is required";
    e.preventDefault();
  } else if (day.value > 31 || day.value == 0) {
    dayErrorMessage = "Must be a valid day";
    e.preventDefault();
  }

  errorDay.innerText = dayErrorMessage;
});

// MONTH ERROR MESSAGES
form.addEventListener("submit", (e) => {
  let monthErrorMessage = "";
  if (month.value === "") {
    monthErrorMessage = "This field is required";
    e.preventDefault();
  } else if (month.value === 0 || month.value > 12) {
    monthErrorMessage = "Must be a valid month";
    e.preventDefault();
  }
  errorMonth.innerText = monthErrorMessage;
});

// YEAR ERROR MESSAGES
form.addEventListener("submit", (e) => {
  let yearErrorMessage = "";
  if (year.value === "") {
    yearErrorMessage = "This field is required";
    e.preventDefault();
  } else if (year.value > 2023) {
    yearErrorMessage = "Must be in the past";
    e.preventDefault();
  }
  errorYear.innerText = yearErrorMessage;
});
