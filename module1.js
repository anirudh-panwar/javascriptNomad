// var let and const
// declarations and initialization

/* var 
 -> window mein add ho jata hai ....
 -> function scoped hota hai ....
 -> firse declare kar skte hein same name se aur error nahi aaega ....
*/
var a = 12;
var a = 13;
function abcd() {
  var b = 45;
  console.log(b);
}

/* const 
 -> we cant change the values of const variables ....
 */
const dulha = "lab";
const dulhan = "laby";

/* let 
 -> block scoped .... 
 -> window mein add nahi hota hai ....
 -> we cant re declare with the same name ....
 */
{
  let cdm = 534; // block scoped
}
// tdz (Temporal Dead Zone)
console.log(ani);
let ani = 12;

/* Hoisting -> ek variable ko jab hum js mein banaate hein to wo do
 hisso mein toot jaata hai...
 and uska declare part upar chala jata hai and
 uska initialization part neeche reh jata hai */

// var a = 12; variable banaya

/* var a = undefined ; wo do hisso mein toota aese ( declaration part )
    a = 12 ; (initialization part )
  */

console.log(bf);

var bf = "fuck";
