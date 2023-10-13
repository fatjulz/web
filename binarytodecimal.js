function binaryToDecimal(binary) {
  if (!/^[01]+$/.test(binary)) {
    return "Invalid input. Please enter a binary number (0s and 1s).";
  }

  let decimal = 0;
  const binaryLength = binary.length;

  for (let i = 0; i < binaryLength; i++) {
    const digit = parseInt(binary[binaryLength - i - 1]);
    decimal += digit * Math.pow(2, i);
  }

  return decimal;
}


const binaryNumber = "101010";
const decimalNumber = binaryToDecimal(binaryNumber);
console.log(`Binary ${binaryNumber} is equivalent to decimal ${decimalNumber}.`);
