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
//> * Increases the chance of being attacked by the boss by **2**

// ### Attack:
//  * Increases attack damage by **two-fifths** (`* 1.4`)  
//  * Reduces health    points by **one quarter** (`* 0.75`)

// ---

// ## General Rules:
//  * A boss is randomly chosen from the three  
//  * You define the bosses’ statistics beforehand  
//  * The user chooses the name of each hero  
//  * You must set a total pool of health   points and attack points that
//  *  the user must distribute among their heroes  
//  *   (Make sure there is a lot of interaction)  
//  * Before the fight begins, the user can choose a stance:
//    * `attack`
//    * `defense`
//    * `normal` (no modifier)
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

    function weightedRandom(values, weights) {
        console.log(values);
        console.log(weights);
        
        
  const total = weights.reduce((a, b) => a + b, 0);
  let rand = Math.random() * total;

  for (let i = 0; i < values.length; i++) {
    rand -= weights[i];
    if (rand <= 0){console.log(values[i])
         return values[i]};
  }
}

// Dynamic weights
const values = [1, 2, 3];

// Change this anytime
const weights = [
  1,  // chance for 1
  1,  // chance for 2
  1   // chance for 3 
];

console.log(weightedRandom(values, weights));


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
    bossAttack( heros)
    {
        let herosIndexes = []
        let chanceIndex = []
        let i = 0
        while(i < heros.length){
            herosIndexes.push(i)
            chanceIndex.push(heros[i].chance)
            i++
        }
        const poorSoul = weightedRandom(herosIndexes,chanceIndex)
        console.log(poorSoul)
        console.log(heros[poorSoul].type + " will be attacked")
        heros[poorSoul].hp -= this.attackPoints
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
let Sauron = new Boss("Sauron", 1000, 30)
let Lilith = new Boss("Lilith", 1000, 30)
let Chronos = new Boss("Chronos", 1000, 30)

class Hero
{
    static heros = []
    static stat = ""

    constructor(name, attackPoints)
    {
        this.chance = 1
        this.name = name
        this.hp = 100
        this.attackPoints = attackPoints
        this.ragePoints = 0
        this.type
        this.status = "alive"
    }
    
    defense ()
    {
        this.hp *= 2.5
        this.attackPoints *= 0.5
        this.chance += 2
    }

}

class Warrior extends Hero{
    constructor(name ){
        super(name, 10  )
        this.ragePoints = 0
        this.type = "warrior"
        this.bonus = 1.25
        Hero.heros.push(this)
    }

    attack(boss)
    {
        let mult = 1
        let useRage = "no"
        this.ragePoints++
        if(this.ragePoints >= 4)
            useRage = prompt("you have 4 rage points do you want to rage ?\n(increas your attack damage by 0.25% this attack):") 

        if((useRage == "y" || useRage == "yes") && this.ragePoints >= 4)
        {
            mult = 1.25
            this.ragePoints -= 4
            useRage = 0
        }

        this.attackPoints *= 1.4
        this.hp *= 0.75
        console.log(this.name + " the warrior attacked");
        boss.hp -= this.attackPoints * mult
        console.log(boss.name + " -"+this.attackPoints * mult)
        mult = 1 
    }
}


class Mage extends Hero{
    constructor(name ){
        super(name,  20  )
        this.mana = randomNumberGen(11,7,1)
        this.type = "mage"
        Hero.heros.push(this)
    }

    attack(boss)
    {
        if(this.mana >= 2)
        {
            console.log(this.name+" the mage attacked");
            this.hp *= 0.75
            boss.hp -= this.attackPoints
            console.log(boss.name + " -"+this.attackPoints)
            this.mana -=2
        }
        else
        {
            console.log(boss.name + " -"+this.attackPoints)
            console.log("not enough mana \nyou get 7 mana points ");
            this.mana += 7
        }
    }
}
class Archer extends Hero{
    constructor(name  ){
        super(name,   15)
        this.NumOfArrows = randomNumberGen(11,7,2)
        this.type = "archer"
        Hero.heros.push(this)
    }


    attack(boss)
    {
        if(this.NumOfArrows >= 2)
        {
            this.hp *= 0.75
            console.log(this.name + " the archer attacked");
            this.NumOfArrows -= 3
            boss.hp -= this.attackPoints
            console.log(boss.name + " -"+this.attackPoints)
            this.NumOfArrows += 1
        }
        else
        {
            console.log(boss.name + " -"+this.attackPoints)
            console.log("not enough arrows \nyou get 7 arrows ");
            this.NumOfArrows += 6
        }
    }
}

new Warrior
new Mage 
new Archer

console.table(Hero.heros)
// !the game start 

// get a random boss
let boss = Boss.randomBoss()

//the total hp pool
let hpPool = 85

// getting the names and hp of the heros
let i = 0
// while(i < Hero.heros.length)
// {
//     if(i == Hero.heros.length -1)
//             Hero.heros[i].hp = hpPool
//     while(Hero.heros[i].name == undefined || Hero.heros[i].name == "")
//         Hero.heros[i].name = prompt("Enter a valid name for your " + Hero.heros[i].type).trim()
//     while(Hero.heros[i].hp  <= 0 || isNaN(Hero.heros[i].hp)   ||Hero.heros[i].hp  > hpPool  || Hero.heros[i].hp == "")
//         Hero.heros[i].hp = Number(prompt("You have a pool of " + hpPool +"hp \nSet the heath of your " + Hero.heros[i].type).trim())
//     if(Hero.heros[i].hp)
//         hpPool -= Hero.heros[i].hp
//     i++
// }
console.table(Hero.heros)
// sellection the stat of the fight
while(boss.stat != "dead"){
while(!(Hero.stat == "attack" || Hero.stat == "defense" || Hero.stat == "normal"))
{
    console.log("You are facing a " +boss.name+ " the monster :\n")
    let stat = prompt("type A for Attack \ntype D for Defense\n type N for Nothing")
    if (stat == "a" || stat == "A" || stat == "attack" || stat == "Attack")
        Hero.stat = "attack"
    if (stat == "d" || stat == "D" || stat == "defense" || stat == "Defense")
        Hero.stat = "defense"
    if (stat == "N" || stat == "n" || stat == "Normal" || stat == "normal")
        Hero.stat = "normal"
}
console.table(Hero.stat)

//! fight

// each hero fight
if(Hero.stat == "attack")
{
    i = 0
    while(i <Hero.heros.length)
    {
        Hero.heros[i].attack(boss);
        i++;
    }
} //else each hero defend
else if(Hero.stat == "defense")
{
    i = 0
    while(i <Hero.heros.length)
    {
        Hero.heros[i].defense();
        i++;
    }
}

// boss turn 

boss.bossAttack(Hero.heros)

Hero.stat = ""
if(boss.hp <= 0)
    boss.stat ="dead"
console.log(boss)
console.table(Hero.heros)

}