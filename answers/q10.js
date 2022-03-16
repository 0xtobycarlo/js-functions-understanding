function myFunction(num1, num2, num3) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1, 100);

// The function takes three arguments - integer datatype.

// The function displays a single argument, only one argument is logged in the console.

// Three variables (num1, num2, num3), with different numeric values are initialised.

// The function is called with three arguments - num3, num1, and a numeric of 100.

// I expect the console to display 100, since a whole number takes precedence over assigned values.
