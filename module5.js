// Repeat karne ko loop kahte hein....
// for
console.log("FOR LOOP");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// while
console.log("WHILE LOOP ");
let i = 11;
while (i < 19) {
  console.log(i);
  i++;
}

// do while
console.log("DO WHILE LOOP");
let j = 12;
do {
  console.log(j);
  j++;
} while (j < 2);

// break
console.log("BREAK STATEMENT");
for (let v = 1; v < 201; v++) {
  console.log(v);
  if (v === 32) {
    break;
  }
}

// continue
console.log("CONTINUE STATEMENT");
for (let b = 1; b < 51; b++) {
  if (b === 32) {
    continue;
  }
  console.log(b);
}

/* Ques. Ask the user for a number and print whether each number
 from 1 to that number is even or odd .
 (e.g., "1 is odd", "2 is even", ...)
*/
console.log("Practice Question :");
let val = prompt("Give a Number");
for (let i = 1; i <= val; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even `);
  } else {
    console.log(`${i} is odd`);
  }
}

