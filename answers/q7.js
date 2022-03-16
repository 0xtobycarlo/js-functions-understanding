let counter = 1;

function myFunction() {
  counter++;
  return counter;
}

myFunction();
const num = myFunction();

// The variable counter is declared w/ a value of 1.

// The function doesn't take any argument.

// Inside the function, the variable counter is incrementing by one, every time the function is called.

// The `return` keyword is used - we expect the value of 'counter' returned.

// The function is not being stored; the value of the function is getting stored.

// From the results, it appears the function does get called - the code was doing three things: 1) calling the function, 2) storing its value, 3) initialising a variable.

// The variable is storing the value from the function and not the function itself.
