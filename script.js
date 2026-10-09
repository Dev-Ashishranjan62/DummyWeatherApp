const weather = [
  { city: "delhi", temp: 32, condition: "Hot" },
  { city: "Ranchi", temp: 30, condition: "sunny" },
  { city: "Dehradun", temp: 5, condition: "cold" },
  { city: "Bihar", temp: 30, condition: "sunny" },
];

const inputField = document.getElementById("inputField");
const checkBtn = document.getElementById("checkBtn");
const displayField = document.getElementById("displayField");
const uList = document.getElementById("uList");

checkBtn.addEventListener("click", () => {
  displayField.hidden = false;
  let input = inputField.value.trim();
  let city = weather.find(
    (item) => item.city.toLowerCase() == input.toLowerCase(),
  );
  if (city) {
    displayField.value = `${city.city} Temputarure ${city.temp} condition : ${city.condition}`;
  } else {
    displayField.value = "City not find, please try again";
  }
});
