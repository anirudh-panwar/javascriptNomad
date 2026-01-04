let marks = [38,76,89,92,49];
// Access array element
marks[0];
marks[2];

// Modify array 
  marks[2]=12;

// Array methods
let arr = [1,2,3,4,5];
arr.push(7000);  // insert element at the end 
arr.pop();  // remove the element from the end 
arr.shift();  // removes the element from the start 
arr.unshift(49);  // adds element at the start 
arr.splice(2,1);  /* removes the element from specific position like 
here remove element from 2nd index and remove only 1 value */

// Reverse , Sort 
let arr1= [1,2,3,4,5];
arr1.reverse(); // It reverses the array 


let arr2 = [34,9,78,6,11,4];
let sr = arr2.sort(function (a, b) // arranges in asc or desc order 
{
    return a - b; // arranges in asc order
});  

// Map , Filter , Reduce
let array1 = [11,62,3,4,25];
array1.forEach(function (val){
  console.log(val + 5);
});

// Map sirf tb use krna hai jb aapko ek naya array bnana hai pichle array ke data ke basis par ...
// Map dikhte he sath mein ek blank array bana liya karo ...
let newarr = array1.map(function (val){
   return 12;
});

// Filter ek naya array bnata hai jo ki puraane array se kuch members naye array mein laata hai aur kuch ko chd deta hai....
let newarr2 = [1,2,3,4,5,6,7,8];
let ans1 = newarr2.filter(function (val){
  if(val>4) return true;

});

// Reduce =>  ek array se ek value bnana , ek bade array ko reduce kar dena ek single value mein ....
let newarr3 = [10,20,30,40,50,60];
let ans = newarr3.reduce(function(accumulator, val){
  return accumulator + val;
},0); // Accumulator ki by default value hai 0 ,accumulator apni value ko yaad rakhta hai ....

// Destructuring and Spread operator

// destructuring means variable create karna jo array se utha liye jaate hein ...
let arre = [1,2,3,4,5];
let [a,b]= arre; //a = 1 , b = 2

// spread operator 
let arre2 = [1,2,3,4,5,6,7,8,9];
let arre3 = [...arre2];  // ...arre2 means arre2 ki saari values uthao aur unhe yhn pe spread kardo ....



 