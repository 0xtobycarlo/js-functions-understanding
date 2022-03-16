function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * getSomeValue();
}

const result = myFunction(5);

// I expect the var result to produce the same value as q12, as everything is the same, except the getSomeValue, which is called twice.

// This does not make any difference to the result however.
