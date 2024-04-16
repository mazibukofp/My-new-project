function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-text-input");
  let headingOne = document.querySelector("h1");
  headingOne.innerHTML = `${cityName.value}`;
  console.log(cityName);
}

let searchCity = document.querySelector("form");

searchCity.addEventListener("submit", search);

let now = new Date();

let timeDay = document.querySelector("#dayAndTime");

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

timeDay.innerHTML = `${day} ${hour}:${minutes}`;
