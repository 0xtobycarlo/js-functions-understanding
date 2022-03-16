function myFunction(num1, num2) {
  num1 + num2;
}

const result = myFunction(5, 5);

// The block of code inside the function will not return a value as the `return` keyword is ommitted once called.
// However, this is still a valid function that adds two numbers together - it performs an action but does not return a value.

// The result will show 'undefined' when logged in the console, which as a primitive data type means 'implicit nothingness'.
