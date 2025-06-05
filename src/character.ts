export class Character {

    private health: number = 1000;
    private alive: boolean = true;
  
    attack(otherCharacter: Character) {
        otherCharacter.receiveDamage();
    }

    private receiveDamage() {
       this.health -= 100;
       return this.health;
    }

    getHealth() {
        return  this.health;
    }


    getAlive() {
        return true;
    }

}