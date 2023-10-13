
function decimalToBinary(decimal) {
  if (isNaN(decimal) || decimal < 0 || Math.floor(decimal) !== decimal) {
    return "Invalid input. Please enter a non-negative integer.";
  }

  if (decimal === 0) {
    return "0";
  }

  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}


const decimalNumber = 42;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(`Decimal ${decimalNumber} is equivalent to binary ${binaryNumber}.`);
