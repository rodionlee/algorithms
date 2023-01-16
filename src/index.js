import "./style.css";

// My recursive functions

function sumRange(n) {
    if (n <= 1) 
        return n;
    
    n = sumRange(n-1) + n;
    return n;
};

function power(base, exponent) {
    if (exponent == 1)
        return base;
    else if (exponent == 0)
        return 1;
    return base * power(base, exponent - 1);
}

function fact(n) {
    if (n == 1) 
        return 1;
    return n * fact(n - 1);
}

function all(arr, callback) {
    if (arr.length === 0) 
        return true;
    
    if (callback(arr[0])) {
        arr.shift();
        return all(arr, callback);
    } else 
        return false;
}

function productOfArray(arr) {
    if (arr.length === 0) 
        return 1;
    return arr.shift() * productOfArray(arr);
}

function contains(obj, searchValue) {

    for (let key in obj) {
        if (obj[key] == searchValue)
            return true;
        if (typeof obj[key] == "object")
            return contains(obj[key], searchValue);
    }
    return false;

}

function totalIntegers(arr) {
    let num = 0;
    for (let item of arr) {
        if (typeof item == "number")
            num++;
        if (typeof item == "object")
            num += totalIntegers(item);
    }
    return num;
}

function sumSquares(arr) {

    let sum = 0;

    for (let item of arr) {
        if (Number.isInteger(item))
            sum += item * item;
        if (Array.isArray(item))
            sum += sumSquares(item);
    }

    return sum;

}

function replicate(times, number) {
    if (times < 0)
        return [];
    return [number].concat(replicate(times-1, number));
}

// Fibonacci (recursive version)
function fibonacci(n, arr = [0, 1]) {

    if (arr.length >= n) {
        return arr;
    }

    const newNumber = arr.at(-1) + arr.at(-2);
    arr.push(newNumber);
    return fibonacci(n, arr);

}

const fibonacciRecursiveInput = document.getElementById("fibonacciRecursiveInput");
fibonacciRecursiveInput.addEventListener("change", () => showResult(fibonacci(fibonacciRecursiveInput.value), "fibonacciRecursiveResult"));

function showResult(result, targetID) {

    const paragraph = document.getElementById(targetID);
    paragraph.innerText = result;

}





// console.log(sumRange(3));

// console.log(power(2, 0));

// console.log(fact(5));

// console.log(all([1, 2, 3, 4], function(num) {
    // return num > 0;
// }));

// console.log(productOfArray([1, 2, 3]));

// const nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(contains(nestedObject, 45));

// const seven = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
// console.log(totalIntegers(seven));

// const arr1 = [1,2,3]; 
// console.log(sumSquares(arr1)); 

// const arr2 = [[1,2],3]; 
// console.log(sumSquares(arr2)); 

// const arr3 = [[[[[[[[[1]]]]]]]]] 
// console.log(sumSquares(arr3)); 

// const arr4 = [10,[[10],10],[10]] 
// console.log(sumSquares(arr4)); 

// console.log(replicate(3, 5));
// console.log(replicate(1, 69));
// console.log(replicate(-2, 6));