function validatePinCode(pinCode) {
  let pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
  return pinRegex.test(pinCode);
}

// Test Cases
console.log(validatePinCode("400088")); // ✅ true (Valid)
console.log(validatePinCode("400 088")); // ✅ true (Valid with space)
console.log(validatePinCode("A400088")); // ❌ false (Starts with alphabet)
console.log(validatePinCode("400088B")); // ❌ false (Ends with alphabet)
console.log(validatePinCode("400 08B")); // ❌ false (Alphabet at the end)
console.log(validatePinCode("40008 8")); // ❌ false (Extra space in wrong place)
console.log(validatePinCode("400@088")); // ❌ false (Special character in between)
console.log(validatePinCode("000088")); // ❌ false (Cannot start with 0)
