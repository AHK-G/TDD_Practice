import { fizzBuzz, getFizzBuzzNumberCounter } from "../src/fizzBuzz";
// import {getFizzString, getBuzzString, getFizzBuzzString} from "../src/fizzBuzz";


// it("should be divisible by 3 and return fizz", ()=>{


//     const result = getFizzString(3);
//     expect(result).toEqual("Fizz");
// })

// it("should be divisible by 5 and return buzz", () => {

//     const result = getBuzzString(5);
//     expect(result).toEqual("Buzz");
// })

// it("should be divisiable by 3 and 5 and return fizzbuzz", ()=> {


//   const result = getFizzBuzzString(15);  
//   expect(result).toEqual("FizzBuzz");  
// })

it("should be divisible by 3 and return fizz", ()=>{

    const result = fizzBuzz(3);
    expect(result).toEqual("Fizz");
})

it("should be divisible by 5 and return buzz", () => {

    const result = fizzBuzz(5);
    expect(result).toEqual("Buzz");
})

it("should be divisible by 3 and 5 and return fizzbuzz", () => {

    const result = fizzBuzz(15);
    expect(result).toEqual("FizzBuzz");
})

it("should return the number as a string if not divisible by 3 or 5", () => {
    const result = fizzBuzz(7);
    expect(result).toEqual("7");
});

it("should loop through numbers 1 to 100 and return fizz, buzz or fizzbuzz", () => {

    const result = getFizzBuzzNumberCounter(5);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
})

it("should loop through numbers 1 to 100 and return fizz, buzz or fizzbuzz", () => {

    const result = getFizzBuzzNumberCounter(30);
    expect(result).toEqual([
        "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
        "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz",
        "Fizz", "22", "23", "Fizz", "Buzz", "26", "Fizz","28","29","FizzBuzz"])
})
