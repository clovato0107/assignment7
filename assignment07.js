

// Coding Steps:
// All questions should be printed to your Browser's console using console.log()

// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
let ages = [ 3, 9, 23, 64, 8, 28, 93]
console.log("Ages: ", ages);
// took the last one in the index and minused the first one in the index
let minusAge = ages[ages.length -1] - ages[0];
console.log("minusAge", minusAge);
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(45);
console.log("Ages after pushing in a new value", ages);
let minusAgePush = ages[ages.length -1] - ages[0];
console.log("minusAge", minusAgePush);
// Use a loop to iterate through the array and calculate the average age.
let sumOfAges = 0;
// let index =0 index is less than ages.length and we want to increase it by 1 each time
for (let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i];
    console.log("index: ", i, "sumeOfAges:", sumOfAges)
}
// calculates total sum of ages
console.log ("Total Sum", sumOfAges);
// calculates average
let average = sumOfAges/ ages.length;
// prints average
console.log("Average", average)

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// took the given values to create the array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

let totalChars = 0;


// Use a loop to iterate through the array and calculate the average number of letters per name.
// start at 0 then count the names length and increase it by 1 each time
for (let i = 0; i < names.length; i ++)
    // testing to see if the loop is running
    console.log( i, "Test");
    // names at a given index lengths
totalChars += names[i].length;
console.log("index: ", i, "name: ", names [i], "totalChars:", totalChars); 
// calculate the average of the length of each name
// calculates the average length of each name
let averageName = totalChars / names.length;
console.log("Average of Names:", averageName);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// holding container for names
let concatNames = "";
// start at 0 and assume i is less than names length increase the names length by 1 each time
for (let i = 0; i < names.length; i++) { 
    // console.log(i, "test");
    // concat names at a given index
    concatNames = concatNames.concat(names [i] + " ");
    console.log(i, "names concatenated")
}
// How do you access the last element of any array?
// its always going to be the last element of the array -1
console.log("Last element of ages array:", ages[ages.length -1]);

// How do you access the first element of any array?
// its always going to be the first element of the array at index 0
console.log("First element of ages array:", ages[0])
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
// holding container for names length
let nameLengths = [];
for (let i = 0; i < name.length; i++) {
    console.log(i, "Test")
    nameLengths.push(names[i].length);
    console.log("Name lengths array:", nameLengths);
}
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let charsTotal = 0
// letting i start at 0 i is less than names length and increment by 1 each time
for (let i = 0; i < nameLengths.length; i++) {
    console.log(i, "test");
charsTotal += nameLengths[i];
console.log("CharsTotal:", charsTotal);
}
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
// function that takes on two parameters
function concatWords(word, n) {
    console.log("Word Par:", word, "n Par:", n);
    let concat = word.repeat(n);
    console.log(concat);
}
concatWords("Hello", 3)
// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
// function that takes on two parameters
function fullName(firstName, lastName) {
//    variable that concatenates first name and last name with a space
    let fullName = firstName + " " + lastName;
//    printing out full name
    console.log(fullName);
}  
//    function calling on a function by passing two parameters
fullName("Chrystal", "LoVato");

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [ 100, 150, 200, 250];
let numbers2 = [1, 2, 3, 4];
function sumNumbersArray(array) {
    let total = 0
    // a for loop that takes i and the length and increments it each time by 1
    for (let i = 0; i < array.length; i++) {
        total += array[i];
        console.log("Total:", total);
    } 
    // checking to see if the value is true
    if (total > 100) {
        console.log("Total:", total, true);
        return true;
    } else {
        console.log("Total:", total, false);
        return false;
    }
}
// calling the function with the parameter of numbers1
sumNumbersArray(numbers1);

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
// start with a function its going to take on a parameter
function calculateNumbersAverage(array) {
    let total = 0
    // i = 0 and we are going to increase the length by 1 each time
    for (let i = 0; i < array.length; i++) {
        total += array[i]
        console.log("calculate Function, total:", total);
    }
    // calculating average
    let average = total / array.length;
    console.log("Average of numbers: ", average);
    return average;
}
calculateNumbersAverage(numbers1)
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 89];
function twoAverages(array1, array2) {
    console.log("Parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;
    for (const number in array1) { 
        total1 += number;
        console.log("current number loop1", number, "total1:", total1);
    }
for (const number of array2){
    total2 += number;
    console.log("current number loop2:", number, "Total2", total2)
}
let average1 = total1 / array1.length;
let average2 = total2/ array2.length;
console.log("Averages", average1, average2);
if (average1 > average2 ) {console.log
    console.log(true);
    return true
} else if (average1 < average2) {
    console.log(false);
    return false;
} else {
    console.log("Numbers are equal");
}
} twoAverages(numbers3, numbers4)

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    console.log("parameters", isHotOutside, moneyInPocket)
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("Buy a drink?");
    return buyDrink;
}
 willBuyDrink(true, 11)


// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.