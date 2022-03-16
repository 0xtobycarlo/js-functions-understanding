function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue();
}

const result = myFunction(5);

// The getSomeValue function returns number 2 every time it is invoked.

// myFunction is declared and takes a single argument.

// The return keyword is returning a sum of 2 * 2, because it is multiplying the getSomeValue function.

// myFunction is invoked with the argument of number 5, but it will not do anything as the argument has not been used in the expression inside the function. i.e Global Scope.

// I expect the result to be 2 * 2 = 4.
