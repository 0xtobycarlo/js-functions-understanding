function myFunction(num1) {
  if (true) {
    return -10;
  }

  return num1 * 10;
}

const result = myFunction(5);

// myFunction is declared and takes one argument.

// The condition in the if statement seems incomplete to me - what is it saying is true?

// It would make more sense to me if it was worded as `if(num1 === 10) {return true} .

// If this is a valid conditional statement than I expect it to mean: if the argument passed into the function is -10, then return a boolean of true.

// The value of the 'return num1 * 10' is expected to return if the first condition is false.

// I expect the answer to read -10.
