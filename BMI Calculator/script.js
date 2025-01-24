
// Select DOM elements
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateButton = document.querySelector("button");
const resultsDiv = document.getElementById("results");

// Function to calculate BMI
function calculateBMI() {
  const height = parseFloat(heightInput.value) / 100; // Convert height to meters
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultsDiv.textContent = "Please enter valid height / weight values.";
    resultsDiv.style.color = "red";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2); // BMI formula

  let category = "";
  if (bmi < 18.6) {
    category = "Underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = "Normal Range";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultsDiv.innerHTML = `Your BMI is ${bmi} (${category}).`;
  resultsDiv.style.color = 'black';
}

// Add event listener to the button
calculateButton.addEventListener("click", calculateBMI);


