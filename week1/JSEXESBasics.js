
//  Section 1: Variable Swap Without Temp
// let a = "some string";
// let b = "other string";
// c  =  a.length;
// a += b;
// b = a.slice(0, c)
// a = a.slice(c); 
// console.log(a)
// console.log(b)


// Section 2: 2D Grid Count
// const game = [
//   ["X", "x", "", "", ""],
//   ["", "", "X", "", ""],
//   ["", "", "", "x", ""],
//   ["", "", "", "", "X"],
//   ["", "X", "", "", ""]
// ]

// for(let i = 0; i <  game.length; i++)
// {
//     for(let k = 0; k < game[i].length; k++)
//     {
//         if(game[i][k] ===  'X')
//         {
//             console.log(`${i},${k}`)
//         }
//     }
// }


//  Section 3: Nested Object Read
// let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
// let thirdChild = family.children[2].name;
// let  allChildren = ""
// const childrenHolder =  family.children

// for (let i = 0; i < childrenHolder.length; i++)
// {
//     allChildren  += childrenHolder[i].name + ', '
// }

// console.log(`The name of the third child is- ${thirdChild}`);
// console.log(`All the children are: ${allChildren}`)


// Section 4: Manual Reverse
// const arr = [1,2,3,4]
// const newarr =  []

// for(let i = arr.length; i > 0; i--){
//     newarr.push(arr[i-1])
// }
// console.log(newarr)


// Section 5: Type Collector
// const arr = [42, "hello", true, null, { a: 1 }, "world", false, 10];
// let countNumbers = 0;
// let countStrings = 0;
// let countNull  = 0;
// let  countObject =  0;
// let  countBoolean = 0;
// for(let item of  arr)
// {
//     if(item  === null)
//     {
//         ++countNull;
//     }
//     else if(typeof item === `number`)
//     {
//         ++countNumbers
//     }
//     else if(typeof item  === `string`){
//         ++countStrings
//     }
//     else if(typeof item === `boolean`){
//         ++countBoolean
//     }
//     else if(typeof item === `object`){
//         ++countObject
//     }
// }
// console.log("Numbers:", countNumbers);
// console.log("Strings:", countStrings);
// console.log("Nulls:", countNull);
// console.log("Objects:", countObject);
// console.log("Booleans:", countBoolean);


// Section 6: Filter Without .filter()
// const arr =  [50, 120, 300, 99, 101];
// const greaterThanAHundred =  [];
// for(item of arr){
//     if(item >  100){
//         greaterThanAHundred.push(item)
//     }
// }
// console.log(arr.length);
// console.log(greaterThanAHundred)


//  Section 7: Conditional Object Filler
// const eveAndOdd = {
//     even: [],
//     odd: []
// };
// let divisibleBy2And3 = 0;
// for(let i = 0; i < 50; i++)
// {
//     if(i % 2 == 0){
//         eveAndOdd.even.push(i) ;
//     }
//     else{
//         eveAndOdd.odd.push(i);
//     }
//     if(i % 2 == 0 && i % 3 == 0){
//         ++divisibleBy2And3;
//     }
// }
// console.log(eveAndOdd);
// console.log(`The sum of numbers that are divisible by 2 and 3:  ${divisibleBy2And3}`);


// Section 8: Grid Checker
const  arr = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

for (let i = 0; i < arr.length; i++){
    for(let j = 0;j< arr[i].length; j++){
        if (i == j || i + j == 2){
        arr[i][j] = '#'
           }
    }
}
console.log(arr)