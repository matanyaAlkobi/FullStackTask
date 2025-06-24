// question number 1

/**
 * Extracts numbers from an array.
 * @param {Array} arr - Input array.
 * @returns {Array|string} Array of numbers or error message if input is invalid or empty.
 */
function extractNumbers(arr){
    try{
        if(!Array.isArray(arr)){
            throw new TypeError("Input must be an array")
        }
    const numbersOnlyArray = []
    if (arr.length === 0){
        return [];
    }
    for (let  item  of arr){
        if (typeof  item == 'number'){
            numbersOnlyArray.push(item)
        }
    }
    return numbersOnlyArray;
    }
    catch(err){
        if (err instanceof TypeError){
            return err.message;
        }
        else {
            return "An unexpected error occurred.";
        }
    }
}

// console.log(extractNumbers("12233"));


// question number 2
function sumNumbersSafe (arr){
    let sum = 0
    try{
        const numbersOnlyArray = extractNumbers(arr);
        sum = numbersOnlyArray.reduce((acc,cur) => acc + cur,0)

    }

    catch(err){
        if (err instanceof SyntaxError)
        {
            console.log(err.message);
        }
        else if (err instanceof ReferenceError){
            console.log(err.message);
        }
        else if (err instanceof AggregateError){
            console.log(err.message);
        }
        else{
            console.log("An unexpected error occurred.");
        }
    }
    return sum;
}

// console.log(sumNumbersSafe([1,2,3,4,"dg","dbdf"]))



