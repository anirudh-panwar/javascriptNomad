// default parameter
function add (v1 = 1, v2 = 3) // giving default values
{
    console.log(v1,v2); 
    console.log(v1+v2); 
}
add();

// rest parameter
/*jab arguments kai saare ho ,toh humein 
 utne he parameters banaane padenge, iss se bachne k liye
 hum rest ka use karte hein . Agar ... function ke parameter
 space mein lage to wo rest operator hai  */
function abcd(...val) // rest parameter
{
    console.log(val);
}
abcd(1,2,3,4,5,6,7,8,9,10);

// return matlab jaha se aaye ho wahi daal denge ...
function bcd()
{
    return 12;
}



let val = abcd();
console.log(val);

// pure vs impure functions 
// aisa fnc jo ki baahar ki value ko naa badle wo hai pure fnc...
let a = 12;
function jkl() // pure function 
{
    console.log("hey");
}

// aisa fnc jo baahar ki value ko badal de wo hai impure fnc...
function hui() // impure function 
{
    ++a;
}

// Closures in JS 
/* ek fnc jo return kare ek aur fnc aur return hone wala
fnc hmesha use krega parent fnc ka koi variable */
function lmn()
{
    let a = 90;
    return function()
    {
        console.log(a);

    }
}

// lexical scoping - physical position ka scope 
function abcd()
{
    let a = 12; // a poore abcd mein accessible hai 
    function defg()
    {
        let b = 13;
        function ghij()
        {
            let c = 14;
        }
    }
}

// IIFE (Immediately Invoked Function Expression )
(function(){
    console.log("heyeye") // turant chlega 

})();

// Hoisting can be applied to functions too meaning -> bann ne se pehle use karna ....
abcd();



function abcd()
{
    console.log("heyeyey");
}


