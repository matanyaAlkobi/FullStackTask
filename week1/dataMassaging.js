const data = [ 
{ 
name: "John", 
birthday: "1-1-1995", 
favoriteFoods: { 
meats: ["hamburgers", "sausages"], 
fish: ["salmon", "pike"], 
}, 
}, 
{ 
name: "Mark", 
birthday: "10-5-1980", 
favoriteFoods: { 
meats: ["hamburgers", "steak", "lamb"], 
fish: ["tuna", "salmon", "barracuda"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["cow", "chicken"], 
fish: ["pike"], 
},
}, 
{ 
name: "Thomas", 
birthday: "1-10-1990", 
favoriteFoods: { 
meats: ["bird", "rooster"], 
fish: ["salmon"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["hamburgers", "lamb"], 
fish: ["bass", "tuna"], 
}, 
}, 
]; 


// Returns an array of all names from the input array of people
function extractAllNames(arr){
    let namesArray  = []
    for (let item  of  arr){
        namesArray.push(item.name)
    }
    return namesArray
}
// console.log(extractAllNames(data))


// Returns all people born before January 1, 1990
function extractPeopleBornBefore1990(arr){
    let dataOfPepoleBornBefore1990 = []
    for (let obj of  arr){
        const [day, month, year] = obj.birthday.split("-").map(Number);
        const birthDate = new Date(year, month - 1, day);
        const year1990 = new Date(1990, 0, 1);
        if (birthDate < year1990){
            dataOfPepoleBornBefore1990.push(obj);
        }  
    }
    return dataOfPepoleBornBefore1990;
}

console.log(extractPeopleBornBefore1990(data))


// Counts how many times each food appears in all people's favoriteFoods
function countFavoriteFoods(arr){
    const foodData = data.flatMap(person => [...person.favoriteFoods.meats, ...person.favoriteFoods.fish])
    const foodCounter = {}
    for (let food of foodData){
        if(foodCounter[food]){
            foodCounter[food]++
        }
        else{
            foodCounter[food] = 1
        }
    }
    return foodCounter;
}

// console.log(countFavoriteFoods(data));



