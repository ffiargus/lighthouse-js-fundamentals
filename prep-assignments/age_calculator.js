function ageCalculator(name, yearOfBirth, currentYear){
  var age = currentYear - yearOfBirth;
  var string = name;

  string += " is " + age + " years old.";

  return string;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));