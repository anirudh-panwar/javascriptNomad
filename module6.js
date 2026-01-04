function dance() {
  // function declaration

  console.log("dance");
  console.log("Happy New Year");
}
dance(); // function call

let fnc = function () // function expression
{
  console.log("Merry Christmas");
};
fnc(); // function call

// fat arrow function
let fnc1 = () => {
  console.log("Fat Arrow Function ");
};
fnc1();

// parameters and arguments
function bakchodi(value) // parameter
{
  console.log(`${value} naach raha hai`);
}
bakchodi("ghoda"); // arguments
bakchodi("baagh");
bakchodi("hiran");
bakchodi("cheel");

// Another example
function add(v1, v2) // parameter
 {
  console.log(v1 + v2);
}
add(1, 3); // arguments
