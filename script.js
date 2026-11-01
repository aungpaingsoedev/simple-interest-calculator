// Simple interest: SI = (P × R × T) / 100
// Total amount = Principal + Simple Interest

const form = document.getElementById("calculator");
const errorEl = document.getElementById("error");
const resultsEl = document.getElementById("results");
const interestEl = document.getElementById("interest");
const amountEl = document.getElementById("amount");
const breakdownEl = document.getElementById("breakdown");

function readNumber(id) {
  const value = document.getElementById(id).value.trim();
  if (value === "") {
    return null;
  }
  const number = Number(value);
  return Number.isFinite(number) ? number : NaN;
}

function money(value) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.hidden = false;
  resultsEl.hidden = true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const principal = readNumber("principal");
  const rate = readNumber("rate");
  const time = readNumber("time");

  if (principal === null || rate === null || time === null) {
    showError("Enter principal, rate, and time.");
    return;
  }

  if (Number.isNaN(principal) || Number.isNaN(rate) || Number.isNaN(time)) {
    showError("Use numbers only.");
    return;
  }

  if (principal < 0 || rate < 0 || time < 0) {
    showError("Principal, rate, and time must be zero or greater.");
    return;
  }

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  interestEl.textContent = money(interest);
  amountEl.textContent = money(total);
  breakdownEl.textContent =
    "SI = (" +
    principal +
    " × " +
    rate +
    " × " +
    time +
    ") / 100 = " +
    money(interest);

  errorEl.hidden = true;
  resultsEl.hidden = false;
});

form.addEventListener("reset", function () {
  errorEl.hidden = true;
  resultsEl.hidden = true;
});
