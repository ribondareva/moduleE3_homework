function printNumbers(a, b) {
  let current = a;
  let step = a < b ? 1 : -1;

  const intervalId = setInterval(() => {
    console.log(current);
    if (current === b) {
      clearInterval(intervalId);
    }
    current += step;
  }, 1000);
}


printNumbers(5, 15);
// printNumbers(15, 5);