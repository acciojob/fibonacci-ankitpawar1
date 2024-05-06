function fibonacci(num) {
  if (num <= 0) {
      return "Invalid input";
  } else if (num === 1) {
      return 0;
  } else if (num === 2) {
      return 1;
  }

  let a = 0;
  let b = 1;
  let temp;

  for (let i = 2; i < num; i++) {
      temp = a + b;
      a = b;
      b = temp;
  }

  return b;
}

console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));