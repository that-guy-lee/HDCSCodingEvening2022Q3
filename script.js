//HyperionDev Coding Challange - Lee Kaplan - Pascal Triangle Challenge
//lee.a.kaplan@gmail.com


//Create a function to get the total of a row
const determineRowTotal = (rowNumber) => {

    //Declare variables
    const rowContents = []      //Placeholder for the row
    let rowTotal = 0        //Placeholder for the total of the row


    while (rowContents.length <= rowNumber) {
        rowContents.unshift(1);     //https://futurestud.io/tutorials/add-an-item-to-the-beginning-of-an-array-in-javascript-or-node-js

        for (let i = 1; i < rowContents.length - 1; i++) {
            rowContents[i] += rowContents[i + 1];
        };
    };

    //Loop through the array and calculate the total
    for (let i = 0; i < rowContents.length; i++) {
        rowTotal += rowContents[i]
    }

    return rowTotal
};

//Create a function that validates user input
const validateInput = (input) => {

    //Logic
    if (input <= 0) {
        return ("The number needs to be bigger than 0")
    } else if (input > 30) {
        return ("The number needs to be smaller than or equal to 30")
    } else if (isNaN(input)) {
        return ("The input needs to be a number")
    } else {
        return (
            `The answer is ${determineRowTotal(input - 1)}`
        )
    }
}


//Tests
if (validateInput(5) == "The answer is 16"){
    console.log("Test 1 passed")
}else{
    console.log("Test 1 failed")
}

if (validateInput(-0) == "The number needs to be bigger than 0"){
    console.log("Test 2 passed")
}else{
    console.log("Test 2 failed")
}

//Get user input
//I'm using an infinite loop on purpose, because I want to allow the user to input numbers multiple times
while (true) {

    //This gets the user input, validates it, and then outputs the results
    alert(
        validateInput(
            prompt("Please enter a row number: ")
        )
    )
}
