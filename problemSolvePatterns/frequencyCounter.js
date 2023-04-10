// Practice Problem: Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such and cinema, formed iceman

// Problem Solving Questions 
// 1. Understand/restate the problem in own words  
//     - When there are two strings, is the first string, have the same characters as the second
//     - are we accounting for numbers, capitol letters,or symbols?? (no) 
// 2.Concrete Example  
//    - are we accounting for numbers, capitol letters,or symbols?? (no) 
//3. Break it Down
//    -make sure that the length of the 1st string, is the same as the second string
//    -create two objects that will hold the contents of each string 
//    -return a false if the length, frequency(amount of characters in each array) and characters are not the same
//    - return a true is that is true 
    const anagramChecker = (string1, string2) => {
        if (string1.length !== string2.length){
            return false
        } //NOTE: checking to see if the length matches since no anagram will have different lengths
        
        const lookup = {}

        for(let i = 0; i < string1.length; i++){ //looping over 1st string
            let letter = string1[i]; 
            //setting the i (the index) of whichever letter we're on to letter to make code cleaner 
            // This helps so we don't keep writing string1[i] or string2[i]
            lookup[letter] ? lookup[letter] +=1: lookup[letter] = 1; // going to check if out lookup object already has the letter in it,
                            //^adding 1 if letter is there OR
                                                //^ initializing the object to 1 for the letter if it isn't there
            console.log(lookup) //to see how it works behind the scenes 
        }

        //in this second loop we are going to compare string1 to string2 so m,ake sure there's the same about of
        //characters in the lookup object
        for(let i = 0 ; i<string2.length; i++) { //now looping through second string now that we have the lookup object for string1
            let letter = string2[i] //setting index of second string to letter for cleaner code (PLACEHOLDER VARIABLE)

            if(!lookup[letter]){ 
                //if we cant find the letter in the lookup object, we make return false since it doesn't match with the object
                return false
            } else {
                lookup[letter] -=1
                //if the letter IS in the object, we subtract 1 from the letter in that object since it matches with string1 
            }
            console.log(lookup)
            //as we console.log this object now, you will see it slowly go back to 0 for each object if the letters match
        }
        return true
    }

console.log(anagramChecker('apple','lapep'))