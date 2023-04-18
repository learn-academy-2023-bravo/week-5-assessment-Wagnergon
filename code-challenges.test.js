// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("secretCode", () => {
    it("should change 'lackadaisical' to 'L4ck4d41s1c4l'", () => {
        const secretCodeWord1 = "Lackadaisical"
        expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    })
    // Expected output: "L4ck4d41s1c4l"
    
    it("should change 'Gobbledygook' to 'G0bbl3dyg00k'", () => {
        const secretCodeWord2 = "Gobbledygook"
        expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    })
    // Expected output: "G0bbl3dyg00k"
    it("should change 'Eccentric' to '3cc3ntr1c'", () => {
        const secretCodeWord3 = "Eccentric"
        expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})


    // Expected output: "3cc3ntr1c"
    
    //Test Suites: 1 failed, 1 total
    //Tests:       0 total
    //Snapshots:   0 total
    //Time:        0.521 s


// b) Create the function that makes the test pass.

// pseudocode 
// declare a funtion codedword
//itirate through the array and find the strings that match "a, e, i, o,u"
// make an object to make a table to map out the characters to their corresponding values
// the coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// we use the replace method 
// use .toLowercase to catch letters that are capitilized
// we use charCodeMap[char.toLowercase()] to retrieve the corresponding matched character from the object
// we need to return the orinal character for the characters that arent in our map
// well use the OR '||' operator for the last step 
// the output will be our encoded message 

const secretCode = (message) => {
    const charCodeMap = { 'a': '4', 'e': '3', 'i': '1', 'o': '0' }
    return message.replace(/[aeio]/gi, char => charCodeMap[char.toLowerCase()] || char)
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.306 s
// Ran all test suites.
// ✨  Done in 1.12s.
// s

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordsWithLetter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

    it("should return an array of words containing 'a'", () => {
        const letterA = "a"
        expect(wordsWithLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    })// Expected output: ["Mango", "Apricot", "Peach"]
    it("should return an array of words containing 'e'", () => {
        const letterE = "e"
        expect(wordsWithLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])// Expected output: ["Cherry", "Blueberry", "Peach"]
    })

})




// b) Create the function that makes the test pass.
// Psuedo code
// declare a function
// use the words array and the letter as your paramaters
// iterate through the array checking for the string that matches your string
// if it matches return that word in youre new array 
// declare a new function thatll be filtered words
// use .filter method to make a new array 
// use .tolowercase to include capital letters
// use .includes to check if the word has the specified letter
// return filteredWords

const wordsWithLetter = (wordsArray, letter) => {
    const filteredWords = wordsArray.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
    return filteredWords 
}

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        0.291 s, estimated 1 s
// Ran all test suites.



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    it("should return true for [5, 5, 5, 3, 3]", () => {
        expect(isFullHouse([5, 5, 5, 3, 3])).toBe("Hand is a full house")
      })
    
      it("should return false for [5, 5, 3, 3, 4]", () => {
        expect(isFullHouse([5, 5, 3, 3, 4])).toBe("Hand is not a full house")
      })
    
      it("should return false for [5, 5, 5, 5, 4]", () => {
        expect(isFullHouse([5, 5, 5, 5, 4])).toBe("Hand is not a full house")
      })
    
      it("should return true for [7, 2, 7, 2, 7]", () => {
        expect(isFullHouse([7, 2, 7, 2, 7])).toBe("Hand is a full house")
      })

})


// b) Create the function that makes the test pass.

//first we need to check if we have five cards
// if the hand.length is not five return false
// make an empty object to hold the key value pairs
// we store a count for each number 
// iterate through each number in the array using for .. of loop
// for each count of the number increase the count by 1
// if the object values include 2, and 3 return is a full house 


const isFullHouse = (numbersArray) => {
    if (numbersArray.length !== 5) return "not enough cards"
  
    const numberCounts = {}
    for (const number of numbersArray) {
      numberCounts[number] = (numberCounts[number] || 0) + 1
    }
  
    if (Object.values(numberCounts).includes(2) && Object.values(numberCounts).includes(3)) {
        return "Hand is a full house"
      } else {
        return "Hand is not a full house"
      }
    }
  
    // Test Suites: 1 passed, 1 total
    // Tests:       9 passed, 9 total
    // Snapshots:   0 total
    // Time:        0.438 s, estimated 1 s
    // Ran all test suites.
    
