// Question number 1
function doubleValues(arr){
    let newArr =  []
    for(let  i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return  newArr
}

// Question number 2
function  onlyEvenValues(arr){
    let newArr =  []
    for(let  i = 0; i < arr.length; i++){
        if(arr[i] % 2 ===  0){
        newArr.push(arr[i]);
        }
    }
    return  newArr
}

// Question number 3
function  showFirstAndLast(arr){
    let newArr =  []
    const lastElementIndex  = arr.length -1;
    if(arr.length > 0  && typeof arr[0] ===  'string'){
        newArr.push(arr[0])
    }
    if(arr.length>1 && typeof arr[lastElementIndex] ===  'string'){
        newArr.push(arr[lastElementIndex])
    }

    return  newArr
}

// Question number 4
function vowelCount(text){
    text =  text.toLowerCase();
    const vowelcounter = {}
    for (let i = 0; i<text.length;i++){
        let  char =  text[i];
        if (char === 'a' ||
             char === 'e' ||
              char === 'i' ||
               char === 'o' ||
                char === 'u')
                {
            if(vowelcounter[char]){
            vowelcounter[char]++
            }
            else{
            vowelcounter[char] = 1;
            }
        }
    }
    console.log(vowelcounter)
    return vowelcounter
}


// Question number 5

// function splittingIntoLetters(text){
//     let newarr = [];
//     for (let char of text)
//     {
//         newarr.push(char);
//     }
//     return newarr;
// }

// function capitalize(letter){
//     return letter.toUpperCase()
// }

// function  startConvertToUppercase(text){
//     const splitArr = splittingIntoLetters(text);
//     console.log(splitArr);
//     const letterOnly = splitArr.filter((letter) => {
//         ascii = letter.charCodeAt(0);
//         return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
//         })
// console.log(letterOnly);
// const capitalizeLetters = letterOnly.map(capitalize);
// console.log(capitalizeLetters);
// return capitalizeLetters

// }
// const text = "hello word!";
// convertToUppercase(text)


// question number 6
// function StartShiftLetters(text)
// {
//     let newText =""
//     for(let letter of text){
//         let charCode =  letter.charCodeAt(0);
//         newText += shiftLetters(charCode);
//     }
//     return newText;

// }
// function shiftLetters(charCode){
//     if(charCode === 90){
//         charCode = 65;
//     }
//     else if(charCode  === 122){
//         charCode = 97
//     }
//     else if((charCode >= 65 && charCode < 90) || (charCode >= 97 && charCode < 122)){
//         ++charCode;
//     }
//     return String.fromCharCode(charCode);

// }

// console.log(StartShiftLetters("matan alkobi!&^%#"))



// question number 7
// Using functions Question 5

function  splitIntoWords(text){
    const splitedArrayIntoWords = text.split(" ")
    return splitedArrayIntoWords
}

function capitalizeEveryOtherWord(arr){
    let swapCase = "";
    for(let i = 0; i< arr.length; i++){
        if(i %  2 == 0){
            swapCase += arr[i] + " ";
        }
        else{
            swapCase += arr[i].toUpperCase() + " ";
        }
    }
    return swapCase
}

const text2 = "hi my name is matan and im 24 years old"
const splitedArr = splitIntoWords(text2);
console.log(capitalizeEveryOtherWord(splitedArr));
