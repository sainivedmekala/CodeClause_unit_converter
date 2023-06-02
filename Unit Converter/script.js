function convert() {
  const inputValue = document.getElementById('inputValue').value;
  const inputUnit = document.getElementById('inputUnit').value;
  const outputUnit = document.getElementById('outputUnit').value;

  let result;

  if (inputUnit === 'meter' && outputUnit === 'kilometer') {
    result = inputValue / 1000;
  } else if (inputUnit === 'meter' && outputUnit === 'mile') {
    result = inputValue / 1609.34;
  } else if (inputUnit === 'kilometer' && outputUnit === 'meter') {
    result = inputValue * 1000;
  } else if (inputUnit === 'kilometer' && outputUnit === 'mile') {
    result = inputValue / 1.60934;
  } else if (inputUnit === 'mile' && outputUnit === 'meter') {
    result = inputValue * 1609.34;
  } else if (inputUnit === 'mile' && outputUnit === 'kilometer') {
    result = inputValue * 1.60934;
  } else {
    result = inputValue; // If input and output units are the same
  }

  document.getElementById('result').textContent = result;
}
