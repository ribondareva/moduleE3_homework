function prime_numbers(a) {
  if (typeof a !== "number" || a > 1000 || a < 1) {
    console.log(`Число ${a} должно быть в диапазоне от 1 до 1000.`);
    return;
  }

  if (a === 1) {
    console.log("Число 1 не является ни простым, ни составным.");
    return;
  }

  if (a === 2) {
    console.log("Число 2 является простым.");
    return;
  }

  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      console.log(`Число ${a} является составным.`);
      return;
    }
  }

  console.log(`Число ${a} является простым.`);
}

prime_numbers(3)