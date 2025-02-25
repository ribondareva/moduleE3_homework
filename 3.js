function sum_func(a){
  return function(b){
    return a + b;
  }
}

// const addTwo = sum_func(3);
// console.log(addTwo(4));

console.log(sum_func(3)(4));