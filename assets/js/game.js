

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "Andrew"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function (enemyName) {
    
  // repeat and execute as long as the enemy robot is alive 
  while (enemyHealth  > 0 && playerHealth > 0) {

        // ask user if they'd liked to fight or run  
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if user picks "skip" confirm and then stop the loop
     if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }         
    }
     // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
     
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

       //award player money for winning
       playerMoney=playerMoney + 20;

       // leave while () loop since enemy is dead
       break;
      }  else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
      
       // check player's health
       if (playerHealth > 0) {

       // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
     fight(pickedEnemyName);
     }
 
     else {
       window.alert("You have lost your robot in battle! Game Over!");
       break;
     }            
       
   }
  };

 /* for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

    fight(pickedEnemyName);
    }
     
  }*/


  // function to start a new game

var startGame = function() {
   // reset player stats
   playerHealth = 100;
   playerAttack = 10;
   playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

    fight(pickedEnemyName);
         }
      
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  startGame() ;
  
};


//endGame();
//shop();