import { JestAssertionError } from "expect";
import { Cell, Rule } from "../src/index";
import chalk from "chalk";
import { Character } from "../src/character";

describe("Character", () => {
  it("should be alive and health should be 1000 when created", () => {
    const character = new Character();

    const alive = character.getAlive();
    const health = character.getHealth();
    expect(health).toEqual(1000);
    expect(alive).toEqual(true);
  });

  it("should deal damage to other character", () => {


    const character = new Character();
    const otherCharacter = new Character();
    character.attack(otherCharacter);


    expect(otherCharacter.getHealth()).toEqual(900);    
  });


  // it("should die and have 0 health when damage exceeds current health", () => {


  //   expect().toEqual(0);
  // });
});
