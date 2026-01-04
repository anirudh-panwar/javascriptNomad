// data types ->
// data ka type  ....
// primitive data type  -> string , number , boolean , null , undefined , symbol , bigint ....
// reference data type -> arrays , objects and functions ....
/* STRINGS
  ' ' - single quotes
  " " - double quotes
  ` ` - backticks
  */

// ARRAYS
let a = [1, 2, 3];
let b = a;
b.pop();

// OBJECTS
let bc = {
  name: "harsh",
};
let mc = bc;
mc.name = "harshita";

/* DYNAMIC TYPING -> js mein static typing nahi hai and yaha par
 hai dynamic typing jiska matlab hai aap data ko change kr skte ho kyunki yaha par dynamic types hai
 */
let bakchodi = 23;
bakchodi = true;
bakchodi = "anirudh";
bakchodi = [];
bakchodi = null;

// typeof quirks 

/* typeof null = 'object';
   typeof NaN = 'number';
*/

// Type Coercion -> concept hai jismein aapka ek type automatically convert ho jaaega

// "5" + 1 = '51' (concatenation/add)
// "5" - 1 = 4

// TRUTHY VS FALSY VALUES

// O false "" null undefined NaN document.all , all are false values.

if(null)
{
    console.log(12);
}
else
{
    console.log(67);
}
