// Practice Problem - implement a function called countUniqueValues, which accepts a SORTED array, and, and counts the unique values in  
//                     the array. There can be negative numbers in the array, but it will always be sorted 
//
//  1. restate the problem - create a function that counts how many different numbers there are in an array 
//  2. Breaking it down 
//      - make a functions 
//      - make a count, keeping track of how many unique numbers there are 
//      - create an object to hold the pairs 
//      -return the count 

const countUniqueValues = (arr) => {
    let i = 0;
    for( let j=1; j< arr.length; j++){
        //j will be going through the entire loop
        if(arr[i] !== arr[j]){ //checking to see if they are not equal
            i++; //will add 1 to i 
            arr[i] = arr[j] // setting the array to the value of arr[j]
        }
         //so we can see how the indexes move to find the unique values
    }
    return i + 1; //returning the index+1 for the number of unique characters 
}
console.log(countUniqueValues([1,2,2,3,3,4,5,6,7,7,8,9,9,10,10,11,11,11,11,12]))

