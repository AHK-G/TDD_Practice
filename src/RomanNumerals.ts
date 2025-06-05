export class RomanNumerals {
  convert(n: number): string {
    const romanMap = new Map([
      [1, "I"],
      [5, "V"],
      [10, "X"],
      [50, "L"],
      [100, "C"],
      [500, "D"],
      [1000, "M"],
    ]);

    let romanLiteral = romanMap.get(n);
    if (romanLiteral) {
      return romanLiteral;
    }

    let romanNumber = "";

    const entries = [...romanMap.entries()];
    let index = entries.length;
    let [divisableNumber, lastRoman] = entries[index - 1];
    while (n / divisableNumber != 0) {
      index--;
      [divisableNumber, lastRoman] = entries[index - 1];
      if (n >= divisableNumber) {
        break;
      }
    }

    // console.log("LASTROMAN: " + lastRoman);
    // console.log("divisableNumber: " + divisableNumber);


    let counter = n / divisableNumber;
    let remainder = n % divisableNumber;

    console.log("COUNTER: " + counter);

    for (let i = 0; i < counter; i++) {
        romanNumber += lastRoman;
    }

    // for 1,2,3 
    for (let i = 0; i < remainder; i++) {
        romanNumber += romanMap.get(1);
    }
    return romanNumber;
  }
}
