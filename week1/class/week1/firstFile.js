// console.log("hello word");
// // variables
// var name = "matan"; // old way

// let age = 24; // new way

// const addres = "mi";

// console.log(typeof name);
// console.log(typeof age);

// // string 
// // ""
// // ''
// // ``

// //string intrepolation
// const newname = `my name is ${name}`;
// console.log(`age: ${age}`);
// let bool =  true;




// let age = 24;
// const Name = "matan";
// let Addres = "Tel Aviv";
// const AreYouVegan = false;
// let NumberOfKids = 0;

// console.log(`age: ${age} Name: ${Name} Addres: ${Addres} AreYouVegan: ${AreYouVegan} NumberOfKids:  ${NumberOfKids}`);

// console.log(`typeof Name: ${typeof Name}`);
// console.log(`typeof Addres: ${typeof Addres}`);
// console.log(`typeof AreYouVeagon: ${typeof AreYouVegan}`);
// console.log(`typeof NumberOfKids: ${typeof NumberOfKids}`);

// const age  = 18;
// const height = 180;
// const sonOfManager = true

// if(sonOfManager)
// {
//     console.log("the kid can  go on whatever  he  wants")
// }
// else if (age < 15)
// {
//     console.log("Cannot");
// }
// else if (age >  15 &&  height < 110)
// {
//     console.log("Kids ride");
// }
// else if  (age >  15 && height > 110)
// {
//     console.log("Go on rollercoaster");
// }

// let msg = age === 19    ? "edd":"erf";
// console.log (msg)

// let counter =  0;
// while(counter <=  100)
// {
//     console.log(counter);
//     ++counter;
    
// }

// for (let i = 1; i < 50;  i++)
// {
//     if(i % 3 === 0)
//     {
//         console.log(i)
//     }
// }


// const array = [1,2,"matan"];
// array[0] ="jhgfdf";
// array.unshift(7);
// array.push(65);
// array.shift();
// array.pop();
// array.splice(1,1,4,5);                                        

// console.log(typeof array);

// const person = {
//     name: "Matan",
//     age: 24,
//     hobbis:["party","sea","music"],
//     favFoods:["meat","toast","Shakshuka"]
// };

// for (let key in  person)
// {
//     if (person[key] ===  typeof Object)
//     {
//         console.log(key)
//         for (let item of person[key])
//         {
//             console.log(item);
//         }

//     }
//     else
//     {
//         console.log(`${key}: ${person[key]}`)
//     }
// }





//  Section 9: Frequency Counter

const countrTheLetters = {}
let text = "Hello word";
text = text.toLowerCase();
for (let char = 0; char < text.length; char++) {
    if (countrTheLetters[char]) {
    countrTheLetters[text[char]]++;
    } 
    else {
    countrTheLetters[text[char]] = 1;
    }
}
console.log(countrTheLetters)
