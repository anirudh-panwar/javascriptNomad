// Convert this into an arrow function ...
/* 
function multiply(a,b){
   return a *b;
} 
*/

let multiply = (a, b) => {
  return a * b;
};

// Use rest parameter to accept any number of scores and return the total ..
function abcd(...scores) {
  let total = 0;
  scores.forEach(function (val) {
    total = total + val;
  });
  return total;
}
console.log(abcd(24, 53, 34, 56, 78, 89));

// Convert this normal function into an IIFE ...
/*
function init()
{
console.log("Initialization");
}
*/

(function init() {
  console.log("Initialized");
})();

// write a BMI calculator
function bmi(weight,height)
{
    return weight / (height*height);
}
console.log(bmi(69, 1.65).toFixed(2));