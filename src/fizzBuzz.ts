// export function getFizzString(fizzNumber: number): string {
//     if (fizzNumber % 3 === 0){
//         return "Fizz";
//     }
//     return fizzNumber.toString();
//     }

//     export function getBuzzString(buzzNumber: number): string {
//         if (buzzNumber % 5 === 0){
//             return "Buzz";
//         }

//         return buzzNumber.toString();
//     }

//     export function getFizzBuzzString(fizzBuzzNumber: number): string {
//         if(fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0){
//             return "FizzBuzz";
//         }
//         return fizzBuzzNumber.toString();
//     }

    export function fizzBuzz(numberCounter: number): string {
        if (numberCounter % 3 === 0 && numberCounter % 5 === 0) {
            return "FizzBuzz";
        } else if (numberCounter % 3 === 0) {
            return "Fizz";
        } else if (numberCounter % 5 === 0) {
            return "Buzz";
        } else {
            return numberCounter.toString();
        }
    }

    export function getFizzBuzzNumberCounter(chosenNumber: number): string[]{
        const result: string[] = [];
        for(let i = 1; i <= chosenNumber; i++){
            result.push(fizzBuzz(i));
        }
        return result;
    }