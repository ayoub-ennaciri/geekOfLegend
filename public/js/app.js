// # GeekOfLegends

// ## Work Instructions:
// > * Create a GitHub repository and make commits with coherent and explicit names  
// > * Use the folder structure learned in class  
// > * Use the material in depth, meaning: use classes, imports, and `extends`  
// > * The story must be told in the console by using as much code as possible to return information  
// >   For example:  
// >   If I have an object with the name `"Casar"`, in the console I should display:  
// >   `"Casar loses 30 HP"` using code like:
// >
// >   ```js
// >   console.log(casar.name + " loses " + boss.attack + " HP");
// >   ```
// >
// >   and **not**:
// >
// >   ```js
// >   console.log("Casar loses 30 HP");
// >   ```

// ---

// ## Game Instructions:
// ### You must create:

// ## Three bosses (Sauron, Chronos, Lilith)

// Each boss must have the following properties:
//  * A name  
//  * A number of health    points (HP)  
//  * A number of attack points  

// ### Boss Rules:
// * Once a boss reaches 20% of its HP, it will ask the player characters a riddle  
// * The riddle is chosen randomly from at least **3 riddles**  
// * The player has **3 attempts maximum** to answer  
// * If they fail → they die  
// * If they succeed → they defeat the boss  

// ### Examples of traditional riddles:
// > * Once spoken, I no longer exist. Who am I?  
// > * I am water, I am air, and I am electricity. Who am I?  

// ### Examples of riddles obtained via JavaScript commands:
// > * What time is it? (computer format)  
// > * What is the index of the first `"i"` in this question?  
// > * What does `Math.floor(1.3 * 10)` return?  

// > * The type of riddle is up to you; it can even be a mix of styles  

// ---

// ## Three heroes: a Mage, a Warrior, and an Archer

// Each hero has specific properties and actions.

// ---

// ## The Warrior

// ### Properties:
//  * name  
//  * health    points  
//  * attack points  
//  * rage points: `0`

// ### Actions:
// > * defense  
// > * attack  

// ### Warrior Rules:
// > * Every turn, the warrior gains 1 rage point  
// > * At 4 rage points, the warrior gains **25% bonus attack** (`* 1.25`) for **1 turn**  
// > * After that turn, rage resets to `0` and the bonus is lost  

// ---

// ## The Mage

// ### Properties:
// > * name   
// > * health    points  
// > * attack points  
// > * mana points: randomly chosen from `7`, `9`, or `11`

// ### Actions:
// > * defense  
// > * attack  

// ### Mage Rules:
// > * Each mage attack costs **2 mana points**  
// > * When the mage does not have enough mana to attack:
// >   * They skip one turn  
// >   * They recover **7 mana points**

// ---

// ## The Archer

// ### Properties:
// > * name  
// > * health    points  
// > * attack points  
// > * number of arrows: randsomly chosen from `7`, `8`, `9`, `10`, or `11`

// ### Actions:
// > * defense  
// > * attack  

// ### Archer Rules:
// > * Each attack consumes **2 arrows per turn**  
// > * The archer recovers **1 arrow each turn**  
// > * When the archer has no arrows left:
// >   * They skip one turn  
// >   * They recover **6 arrows**

// ---

// ## Actions

// ### Defense:
//  * Reduces attack damage by half (`* 0.5`)  
//  * Increases health  points by **2.5 times** (`* 2.5`)  
// useless bc the boss will attack all of them each round regardless > * Increases the chance of being attacked by the boss by **2**

// ### Attack:
//  * Increases attack damage by **two-fifths** (`* 1.4`)  
//  * Reduces health    points by **one quarter** (`* 0.75`)

// ---

// ## General Rules:
//  * A boss is randomly chosen from the three  
//  * You define the bosses’ statistics beforehand  
// > * The user chooses the name of each hero  
// > * You must set a total pool of health   points and attack points that
//     the user must distribute among their heroes  
// >   (Make sure there is a lot of interaction)  
// > * Before the fight begins, the user can choose a stance:
// >   * `attack`
// >   * `defense`
// >   * `normal` (no modifier)
// > * Each turn:
// >   * The three heroes each attack the boss once  
// >   * The boss attacks one hero at random  

// ---

// ## Bonus:
// >   * For riddles, the user’s answer must:
// >   * Be converted to lowercase  
// >   * Have all spaces removed  
// >   * Example:
// >     * `"Un Marron"` → `"unmarron"`
// > * You must also find a way to check if the correct answer is **contained** within the user’s answer  
// >   * Example:
// >     * Correct answer: `"man"`  
// >     * User answer: `"the MeN"`  
// >     * The answer is considered **correct**



//! Programm

// boss class


/** 0 for even , 1 for odd, 2 for both  */
    const randomNumberGen = (max ,min ,OddEvenBoth ) =>
    {
        let num = Math.floor(Math.random() *(max - min) + min)
        if(num % 2 == 0 && Number(OddEvenBoth) == 1)
        {
            if(num == max)
            {
                num--
            }
            else 
                num++
        }
        else if(num % 2 != 0 && Number(OddEvenBoth) == 0)
        {
            if(num == max)
            {
                num--
            }
            else 
                num++
        }
        return num
    }


class Boss
{
    static riddles = []
    static bosses = []
    constructor(name, hp, attackPoints)
    {
        this.name = name
        this.hp = hp
        this.maxhp = hp
        this.attackPoints = attackPoints
        this.status = "alive"
        Boss.bosses.push(this)
    }
    
    static addreddle(riddle)
    {
        Boss.riddles.push(riddle)
    }
    static randomBoss () 
    {
        return Boss.bosses[Math.round((Math.random() * (Boss.bosses.length - 1))) ]
    }
    bossAttack(damage, heros)
    {
        const attackDamage = 20
        // heros[Math.round((Math.random() * (heros.length - 1)))]
        let i = 0 
        while(i < heros.length){
            if(heros[i],stat = "defense")
            {
                heros[i].hp -= (attackDamage * 0.5)
            }
            else 
                heros[i].hp -= attackDamage 
        }
    }
    bossReddilActive()
    {
        // if they defeat the boss return true else return false
        let attemts = 3
        if (this.hp <= this.maxhp * 0.2 )
        {
            let riddle = Boss.riddles[Math.round((Math.random() * (Boss.riddles.length - 1))) ]
            while(attemts)
            {
                let anwser = prompt(riddle.riddle)
                if (anwser == riddle.anwser)
                {
                    this.status = "dead"
                }
                attemts--
            }
            if(attemts == 0 && this.status == "alive")
                return false
            else return true
        }
    }

}
// riddles
Boss.addreddle({name : "1", riddle : "Does not have an end or a start.\nwhat is it\n?", anwser : "circle"})
Boss.addreddle({name : "2", riddle : "Has a kneck but no head.\nwhat is it?\n", anwser : "bottle"})
Boss.addreddle({name : "3", riddle : "What is the thing that you see everywhere in the dark.\n", anwser : "darkness"})

// todo : remove this later 
console.log(Boss.riddles)
// bosses
let Sauron = new Boss("Sauron", 100, 100)
let Lilith = new Boss("Lilith", 100, 100)
let Chronos = new Boss("Chronos", 100, 100)

class Hero
{
    constructor(name, hp, attackPoints)
    {
        this.name = name
        this.hp = hp
        this.attackPoints = attackPoints
        this.ragePoints = 0
        this.stat = "normal"
    }
    
    defense ()
    {
        this.stat = "defense"
        this.hp *= 2.5

    }
    attack()
    {
        this.stat = "attack"
        this.attackPoints *= 1.4
        this.hp *= 0.75
    }

}

class Warrior extends Hero{
    constructor(name, hp, attackPoints){
        super(this.name = name, this.hp = hp, this.attackPoints = attackPoints )
        this.ragePoints = 0
    }
}
class Mage extends Hero{
    constructor(name, hp, attackPoints){
        super(this.name = name, this.hp = hp, this.attackPoints = attackPoints )
        this.mana = randomNumberGen(11,7,1)
    }
}
class archer extends Hero{
    constructor(name, hp, attackPoints){
        super(this.name = name, this.hp = hp, this.attackPoints = attackPoints )
        this.NumOfArrows = randomNumberGen(11,7,2)
    }
}
