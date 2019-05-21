// INSTRUCTIONS: Build a command-line based zombie fighting game.
// =========================================================================================================

// One Solution for Building a CLI RPG 
// ===========================================================================================================

// Load the inquirer package
const inquirer = require("inquirer");

// Set initial health amounts.
let userHealth = 75;
const zombieHealth = 15;
const direWolf = 20;
const boss = 35;
let progress = 0;

// Created a generic function that checks if the user won or lost.
function checkRound(eHealth) {

  console.log("");
  console.log("");

  // If the user has less than 0 health.... then the user lost.
  if (userHealth <= 0) {

    console.log("###############################################");
    console.log("");
    console.log("Game over dude. It looks like you're dead.");
    console.log("");
    console.log("###############################################");

    // Exit the game
    process.exit();
  }

  // If the zombie has less than 0 health.... then the user won.
  if (eHealth <= 0) {
    console.log("###############################################");
    console.log("");
    console.log("Victory! You defeated the Attacker and survived!");
    console.log("");
    console.log("###############################################");
  }

  if(eHealth > 0){
    return playRound(eHealth)
  }
  // After performing the "check", the next round is initiated.
  switch(progress){
    case 1:
      gamePhase1()
      break;
    case 2:
      gamePhase2()
      break;
    case 3:
      gamePhase3()
      break;
    case 4:
      gamePhase4()
      break;
    default:
      console.log("###############################################");
      console.log("");
      console.log(`You stand over the Strangers broken body filled with a strange sense of
pride.  Maybe something was passed from him to you in the struggle. As you 
look around at the abandonded circus your realize that you will never come
back from this moment.  You realize that this place will become your new Home.
WELCOME HOME...


...The End...`);
      console.log("");
      console.log("###############################################");
      // Exit the game
      process.exit();
      break;
      
  }

}


// This function holds the game logic
function playRound(enemy) {
  let enemyHealth = enemy;
  // We create a list prompt. Specifying that the user must pick a random number between 1 and 5.
  inquirer.prompt([
    {
      type: "list",
      name: "userGuess",
      message: "Try to stay alive! Guess a number between [1-5]",
      choices: ["1", "2", "3", "4", "5"]
    }

  ]).then((guess) => {
    // Assign a random damage value for the round.
    var damage = Math.floor(Math.random() * 5) + 1;

    // The zombie should choose a random number.
    var zombieNum = Math.floor((Math.random() * 5)) + 1;
    console.log("");
    console.log("");
    console.log("Zombie rolled " + zombieNum);

    // If the user's guess matches the number then...
    if ((zombieNum - 1 === parseInt(guess.userGuess)) || (zombieNum === parseInt(guess.userGuess)) || (zombieNum + 1 === parseInt(guess.userGuess))) {

      // Subtract the damage amount from the zombie's health.
      enemyHealth -= damage;
      console.log("YOU HIT THE ENEMY WITH " + damage + " damage");
      console.log("You have " + userHealth + " health left. The enemy has " + enemyHealth + " health left.");

      // Check if the game is over.
      return checkRound(enemyHealth);
    }

    else {
      // Subtract the damage amount from the user's health.
      userHealth -= damage;
      console.log("OH NO! The Attacker slashed you with " + damage + " damage");
      console.log("You have " + userHealth + " health left. The enemy has " + enemyHealth + " health left.");

      // Check if the game is over.
      return checkRound(enemyHealth);

    }
  });
}

//Game function that handles the players movement throughout the game world
function gameStart(){
  console.log('\033[2J');
  inquirer.prompt([
    {
      type: "list",
      name: "whereTo",
      message: `While driving down a remote Highway your car starts to sputer and die.
You see some structures off in the distance and limp your vehilce to the
parking lot only to find an abandonded circus carnival grounds.  It's 
enclosed with a fence with a big sign saying "Keep Out".  In the woods 
behind you you hear rustling and unhuman noises.  You see a hole in the fence, 
what will you do Next? 
1. Stay in the car
2. Inspect the woods
3. Make a run for the hole in the fence
4. Stand outside the car and whistle "Dixie"`,
      choices: ["1","2","3","4"]
    }
  ]).then((guess)=>{
    progress++;
    switch(guess.whereTo){
      case "1":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log("Before you can react a Zombie runs out of the woods and attacks");
        console.log("");
        console.log("###############################################");
        playRound(zombieHealth)
        break;
      case "2":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log("Your an Idiot, a Dire Wolf Jumps out and attacks you");
        console.log("");
        console.log("###############################################");
        playRound(direWolf)
        break;
      case "3":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log("You make it to the fence and are happy to find cover from the unknown");
        console.log("");
        console.log("###############################################");
        gamePhase1()
        break;
      case "4":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log("A Stranger emerges from the woods and asks your name...");
        console.log("");
        console.log("###############################################");
        gamePhase4()
        break;
    }
  });
}

function gamePhase1(){
  inquirer.prompt([
    {
      type: "list",
      name: "phase1",
      message: `On the other side of the fence you see a rollercoaster with a blinking light.
you also see an abandonded consessions stand and a vintage Ford pickup with rust 
and dirt all over it.  What will you do?
1. There's always time for a rollercoaster ride!!!
2. I'm straving, time for a snack
3. A Truck! I'm Saved!!!!!`,
      choices: ["1", "2", "3"]
    }
  ]).then((guess)=>{
    progress++;
    switch(guess.phase1){
      case "1":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`You jump in the roller coaster and my some miricle the power
is still working.  You take off and enjoy the ride.  While on
the upper sections of the ride you notice a river at the end of the 
circus grounds. The ride finishes and you choose to inspect the River.`);
        console.log("");
        console.log("###############################################");
        gamePhase2()
        break;
      case "2":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log("While digging through the shack a Zombie breaks through a door and Attacks");
        console.log("");
        console.log("###############################################");
        playRound(zombieHealth)
        break;
      case "3":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`You get to the truck and turn the key but it wont start.
The sound of foot steps catch your ear, then a gruff voice 
asks you your name...`);
        console.log("");
        console.log("###############################################");
        gamePhase4()
        break;
    }
  })
}
function gamePhase2(){
  inquirer.prompt([
    {
      type: "list",
      name: "weapon",
      message: `Walking down the obvious path you notice the moon has come out and you are
in the open with no protection. Thinking you may want to arm your self you
look around.  You see a shiny knife stuck blade in the ground with leaves all
around it, a lead pipe leaning aginst a wall, an old 2x4 to your right, and 
an old blanket that looks dirty and might help you blend in.  What will 
you choose?
1. Go pick up the knife, it'll be silent and deadly
2. Opt for the lead pipe, bash bash bash
3. pickup the 2x4, it's the closest
4. Choose the blanket and avoid trouble`,
      choices: ["1","2","3","4"]
    }
  ]).then((guess)=>{
    progress++;
    switch(guess.weapon){
      case "1":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`You go for the knife but when you grab it a bear trap triggers and 
ensnares your hand, breaking your wrist. After freeing your self you 
are now injured and relize that you are not alone. You craddle your poor 
arm and make a dash for the nearby sound of water.`);
        console.log("");
        console.log("###############################################");
        userHealth -= 20; 
        checkRound(0);
        break;
      case "2":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`You fumble with the pipe and it falls to the ground with a crash.
hearing a sound from behind you arm your self as you see a zombie 
lunge for you...`);
        console.log("");
        console.log("###############################################");
        userHealth += 20;
        playRound(zombieHealth)
        break;
      case "3":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`Reaching for a board a voice breaks the silence."That old wood
ain't gonna be enough to save you boy!".  From the shadows a figure 
appears and asks you your name...`);
        console.log("");
        console.log("###############################################");
        userHealth += 10;
        gamePhase4();
        break;
      case "4":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`With the moon light heavy on your mind you choose the blanket. You
hear rustling from a side path and hide under the blanket fearing to see 
what stalks you in the night.  You hear a animal outside panting and sniffing 
searching for you.  A far off howl grabs it's attention. it responds in kind 
and goes running toward the howl.  Your are left shacking with fear.  You collect
yourself and make your way down the path to the sound of water.`);
        console.log("");
        console.log("###############################################");
        userHealth -= 5
        checkRound(0);
        break;
    }
  })
}
function gamePhase3(){
  inquirer.prompt([
    {
      type: "list",
      name: "river",
      message: `You make it to the river an notice an old boat roped to an old dock. It 
an old motor with a pull cord to start it. You also notice another path that
leads along the river.  What will you do?
1. Jump in the boat and pull like hell on that cord, Time to get outta here!
2. Follow the new path down the river
3. Get in the boat an try to push off quietly 
4. Head back to the pickup Truck`,
      choices: ["1","2","3","4"]
    }
  ]).then((guess)=>{
    progress++;
    switch(guess.river){
      case "1":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`You jump in and start pulling.  The sound of the engine trying to come to life
alerts a Dire Wolf to your presence. It jumps on borad the board and the struggle
for your life ensues...`);
        console.log("");
        console.log("###############################################");
        playRound(direWolf);
        break;
      case "2":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`Choosing the path you walk through a cluster of bushes.  On the other side 
you find a Dire Wolf ready to strike.  You prepare for an all out fight
for your life...`);
        console.log("");
        console.log("###############################################");
        playRound(direWolf)
        break;
      case "3":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`You sneak your away onto the boat but just before you can get the ropes
untied you hear someone walk up behind you.  The strange figure asks for
your name...`);
        console.log("");
        console.log("###############################################");
        gamePhase4()
        break;
      case "4":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`You turn away from the water, fearing you might drowned, and walk back
to the truck you saw earlier. on your way back a Zombie jumps out from
behind a building. You prepare to defend yourself.`);
        console.log("");
        console.log("###############################################");
        playRound(zombieHealth)
        break;
    }
  })

}
function gamePhase4(){
  inquirer.prompt([
    {
      type: "list",
      name: "bossMan",
      message: `You turn towards the voice to see a frightening cold faced figure come 
into view.  His face is expressionless and his eyes black. You know what ever
you do, it must be done quickly.
1. Tell the man your name, it's not polite to ignore people
2. Ask him for his name first
3. Scream and cry while peeing your pants, I mean this guy is really scary!
4. Lunge at the guy, maybe you'll have a chance if you strike first`,
      choices: ["1", "2", "3", "4"]
    }
  ]).then((guess)=>{
    progress=5;
    switch(guess.bossMan){
      case "1":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`Before you can get the words out of your mouth, the man lundges at you.
you are caught off guard and but rebound quickly.  Deep down you were ready
for a fight...`);
        console.log("");
        console.log("###############################################");
        playRound(boss);
        break;
      case "2":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`This response seems to startle the man. You can almost see the crazed wheels 
in his head turn as he tries to figure out his next move.  You quickly realize
he is not going to answer your question but that your actions have caught him 
off guard.  While he ponders what to do next you make a fast move to strike
him first while he is preoccupied...`);
        console.log("");
        console.log("###############################################");
        userHealth += 20;
        playRound(boss);
        break;
      case "3":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`An evil smile spreads across the mans face.  You are right to soil yourself,
this guys means you serious harm...`);
        console.log("");
        console.log("###############################################");
        userHealth -= 20;
        playRound(boss)
        break;
      case "4":
        console.log('\033[2J');
        console.log("###############################################");
        console.log("");
        console.log(`The man watches you come at him then pulls a fast move at the last second
that knocks you to the ground.  He smiles while you struggle to get back up.
Looks like this is not going to be easy...`);
        console.log("");
        console.log("###############################################");
        userHealth -= 5;
        playRound(boss);
        break;
      default:
        console.log("Error")
        // Exit the game
        process.exit();
        break;
    }
  })
}

// Starts the game!
gameStart();
