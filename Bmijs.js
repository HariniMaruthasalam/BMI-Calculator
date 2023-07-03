function calculateBMI() {
  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  var resultDiv = document.getElementById("result");

  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.innerText = "Please enter valid values for weight and height.";
    return;
  }

  var bmi = weight / (height * height);
  var category;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultDiv.innerText = "Your BMI: " + bmi.toFixed(2) + " - " + category;
}
