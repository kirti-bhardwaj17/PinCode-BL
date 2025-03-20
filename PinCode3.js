function validatePinCode(pinCode) {
  let pinRegex = /^[1-9][0-9]{5}$/;
  return pinRegex.test(pinCode);
}

// Test Cases
console.log(validatePinCode("400088")); // ✅ true (Valid)
console.log(validatePinCode("400088B")); // ❌ false (Ends with an alphabet)
console.log(validatePinCode("400088#")); // ❌ false (Ends with a special character)
console.log(validatePinCode("40008A")); // ❌ false (Contains alphabet in the middle)
console.log(validatePinCode("4000889")); // ❌ false (More than 6 digits)
console.log(validatePinCode("000088")); // ❌ false (Cannot start with 0)
