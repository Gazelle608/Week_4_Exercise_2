// TODO: Create a function called sum. The function will take in a parameter andcalculate all the numbers from 0 -> the parameter. You must check if the parameterisan integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowedtouse methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Makesureto test your code effectively.
function sum(n) {
    if (typeof n !== 'number' || n !== n) {
        return "The value passed is not a number";
    }

if (n % 1 !== 0) {
    return "The value passed is not a number";
}

if (n < 0) {
    return "Please provide a non-negative integar";
}

let total = 0;
for (let i = 0; i <= n; i++) {
    total += i;
}

return total;
}

console.log(sum(5))

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
function factorial(n) {
    if (typeof n !== 'number' || n !== n) {
        console.log("The value passed is not a number");
        return;
    }

if (n % 1 !== 0) {
    console.log("Please enter an integer");
    return;
}

if (n < 0) {
    console.log("Factorial is not defined for negative numbers");
    return;
}

let result = 1;
for (let i = n; i > 1; i--) {
    result *= 2;
}

console.log(result);
}

factorial(12)

// TODO: Create a function called funkyMath . If this function is calledwith2arguments the function will subtract the first from the second. If the functionis calledwith 3 arguments it will add all 3 numbers together. If the function is calledwith4arguments it will add together argument 1 and 2 , 3 and 4 separately. Thendividethem accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
function funkyMath(a, b, c, d) {
    const argCount = arguments.length;

    if (argCount === 2) {
        console.log(b - a);
    }

    else if (argCount === 3) {
        console.log(a + b + c);
    }

    else if (argCount === 4) {
        const numerator = a + b;
        const denominator = c + d;

        if (denominator === 0) {
            console.log("Cannot divide by zero");
            return;
        }

        const result = numerator / denominator;
        console.log(result.toFixed(2));
    }

    else {
        console.log("Invalid number of arguments. Use 2, 3, or 4 arguments only.");
    }
}
funkyMath(4,4)

// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
let currentArray = [1, 2, 33, 45, 6, 44];
let oddNumbersArray = [];
let evenNumbersArray = [];

for (const number of currentArray) {
    if (number % 2 !== 0) {
        oddNumbersArray.push(number);
    } else {
        evenNumbersArray.push(number);
    }
}

oddNumbersArray.sort((a, b) => a - b);
console.log("Original array (even numbers remaining):", evenNumbersArray);
console.log("Odd numbers array (sorted):", oddNumbersArray);

// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
const me = {
    firstName: "Gazelle",
    lastName: "Pearson",
    age: "19",
    favouriteColour: "Royal Blue",
    dreamCar: "Range Rover Hybrid",
};
console.log(me);

// TODO: Create and add a new property and value of ‘favourite food’ to the object.
me.favouriteFood = 'Alfredo Pasta';
console.log(me);

// TODO: Now delete the age property from the object
delete me.age;
console.log(me);
