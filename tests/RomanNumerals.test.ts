import {RomanNumerals} from '../src/RomanNumerals';


describe("RomanNumerals", () => {
  it("should return number 1 to roman I", () => {
    const romanNumerals = new RomanNumerals();

    const romanNumber = romanNumerals.convert(1);

    expect(romanNumber).toBe('I');
  });
  
  test.each([
    [1,     "I"],
    [5,     "V"],
    [10,    "X"],
    [50,    "L"],
    [100,    "C"],
    [500,    "D"],
    [1000,    "M"],

    [2,    "II"],
    [3,    "III"],

    [6,    "VI"],
    // [7,    "VII"],
    // [8,    "VIII"],

    // [11,    "XI"],
    // [12,    "XII"],
    // [13,    "XIII"],

    //[4,    "IV"],

  ])("should convert %s to roman %s", (arabicNumber, expectedRomanNumber)=> {
    const romanNumerals = new RomanNumerals();

    const romanNumber = romanNumerals.convert(arabicNumber);

    expect(romanNumber).toBe(expectedRomanNumber);
  })


  });


