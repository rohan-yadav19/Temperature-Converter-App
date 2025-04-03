function convertTemperature(): void {
  let inputTemp = (document.getElementById("tempInput") as HTMLInputElement)
    .value;
  let unit = (document.getElementById("unitSelect") as HTMLSelectElement).value;
  let result = document.getElementById("result") as HTMLParagraphElement;

  if (!inputTemp) {
    result.textContent = "Please enter a temperature.";
    return;
  }

  let temp = parseFloat(inputTemp);
  let celsius: number, fahrenheit: number, kelvin: number;

  switch (unit) {
    case "celsius":
      celsius = temp;
      fahrenheit = (temp * 9) / 5 + 32;
      kelvin = temp + 273.15;
      result.innerHTML = `Fahrenheit: ${fahrenheit.toFixed(
        2
      )}°F <br> Kelvin: ${kelvin.toFixed(2)}K`;
      break;
    case "fahrenheit":
      fahrenheit = temp;
      celsius = ((temp - 32) * 5) / 9;
      kelvin = celsius + 273.15;
      result.innerHTML = `Celsius: ${celsius.toFixed(
        2
      )}°C <br> Kelvin: ${kelvin.toFixed(2)}K`;
      break;
    case "kelvin":
      kelvin = temp;
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9) / 5 + 32;
      result.innerHTML = `Celsius: ${celsius.toFixed(
        2
      )}°C <br> Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
      break;
  }
}
