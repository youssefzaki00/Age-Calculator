const inputElements = document.querySelectorAll(".card__input");
const submitButton = document.querySelector(".card__button");

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
const validateDay = (day) => {
  if (day && day > 0 && day <= 31) {
    return true;
  }
};
const validateMonth = (month) => {
  if (month && month > 0 && month <= 12) {
    return true;
  }
};
const validateYear = (year) => {
  const currentYear = new Date().getFullYear();
  if (year && year > 0 && year <= currentYear) {
    return 200_00_000;
  }
};
const isDateValid = (dayElement, monthElement, yearElement) => {
  const isValid = [false, false, false];

  if (!validateDay(dayElement.value)) {
    dayElement.classList.add("card__input--error");
  } else {
    isValid[0] = true;
    dayElement.classList.remove("card__input--error");
  }

  if (!validateMonth(monthElement.value)) {
    monthElement.classList.add("card__input--error");
  } else {
    isValid[1] = true;
    monthElement.classList.remove("card__input--error");
  }

  if (!validateYear(yearElement.value)) {
    yearElement.classList.add("card__input--error");
  } else {
    isValid[2] = true;
    yearElement.classList.remove("card__input--error");
  }

  return isValid.every((item) => item === true);
};
function calculateAge(day, month, year) {
  const age = currentYear - year;
  const months = currentMonth - month;
  const days = currentDay - day;
  if (months < 0) {
    return age--;
  } else if (days < 0) {
    return age--;
  } else {
    return age;
  }
}

function onClickHandler() {
  const dayElement = document.querySelector('.card__input[name="day"]');
  const monthElement = document.querySelector('.card__input[name="month"]');
  const yearElement = document.querySelector('.card__input[name="year"]');
  const resultElement = document.querySelector(".card__resultValue");

  if (!isDateValid(dayElement, monthElement, yearElement)) {
    resultElement.textContent = "--";
    return;
  }
  resultElement.textContent = calculateAge(
    dayElement.value,
    monthElement.value,
    yearElement.value
  ).toString();
}
inputElements.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    e.key === "Enter" && onClickHandler();
  });
});
submitButton.addEventListener("click", onClickHandler);
