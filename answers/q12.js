function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * num2;
}

const result = myFunction(5);

// The first function (getSomeValue) returns 2, and takes no arguments,

// The second function (myFunction) takes a single argument.

// Inside myFunction, the first function is called and its value is stored in var (num2).

// The function returns a value of two digits multiplied.

// MyFunction is invoked with argument 5, and its results are stored.

// I expect the results to show 2 * 5 = 10.
