function isEven(num){
  function recurse(start){
    if (start === 0){
      return true;
    }

    else if (start === 1){
      return false;
    }
    else
      return recurse(start - 2);
  }
  return recurse(num);
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??