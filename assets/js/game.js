<<<<<<< HEAD
var playerName=window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney= 10;
//You can also log mulptiple values at once like this

var enemyNames = [ 'Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack =12;
//fight function(now with parameter for enemy's name)
var fight =function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    //ask player if they'd like to fight or skip this battle
    var promptFight =window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
=======

/*GAME FUNCTIONS */
//function to generate a random numeric value
var randomNumber = function(min,max){
    var value = Math.floor(math.random()*(max-min+1)+min);
    return value;

};


//fight function(now with parameter for enemy's object holding name, health, and attack values))
var fight =function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {}
    
    //ask player if they'd like to fight or run
    var promptFight =window.prompt ('Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.');
>>>>>>> develop
    //if player picks "skip" confirm and they stop the loop
    
    if (promptFight ==="skip"|| promptFight==="SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like the quit");
       //if yes (true), leave fight
       if (confirmSkip) {
<<<<<<< HEAD
           window.alert(playerName + 'has decided to skip this fight. Goodbye!');
           //subtract money  from playerMoney for skipping
           playerMoney =playerMoney -10;
           console.log ("playerMoney", playerMoney)
           break;
       }
    }
    // remove enemy's health by subtracting the amount set in the playerAttack variable
     enemyHealth=enemyHealth-playerAttack;
     console.log (
         playerName +'attacked' +enemyName+ '.' +enemyName + 'now has'+enemyHealth + 'health remaining.'
     );
     
     //check enemy's health
     if(enemyHealth <=0) {
         
         window.alert(enemyName +'has died!');
         //award player money for winning
         playerMoney =playerMoney +20;
=======
           window.alert(playerInfo.name + 'has decided to skip this fight. Goodbye!');
           //subtract money  from playerInfo.money for skipping
           playerInfo.money = Math.max(0,playerInfo.money-10);
           console.log ("playerInfo.money", playerInfo.money)
           break;
       }
    }
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack -3,playerInfo.attack);
     enemy.health=Math.max(0, enemy.health-damage);
     console.log (
         playerInfo.name +'attacked' +enemy.name+ '.' +enemy.name + 'now has'+enemy.health + 'health remaining.'
     );
     
     //check enemy's health
     if(enemy.health <=0) {
         
         window.alert(enemy.name +'has died!');
         //award player money for winning
         playerInfo.money =playerInfo.money +20;
>>>>>>> develop
         //leave while() loop since enemy is dead
         break;
         
     } else {
<<<<<<< HEAD
         window.alert(enemyName +'still has' + enemyHealth +'health left.');
     }

    //remove player's health by subtracting the amount set in the enemyAttack variable
     playerHealth=playerHealth-enemyAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + 'attacked ' + playerName + '.' + playerName + ' now has ' + playerHealth + ' health remaining.'
     );
     //check players health
     if(playerHealth <= 0) {
         window.alert(playerName+"has died!"); 
         //leave while()loop if player is dead
         break;
     } else {
         window.alert(playerName+'still has' +playerHealth +'health left.');
     
     }
    } //end of while loop
}; //end of fight function
   
//run fight function to start game fight ();

//Game States
//"LOSE" - Player robot's health is zero or less

//"WIN" -Player robot has defeated all evnemy-robots

//fight each enemy-robot by looping over them and fighting them one at a time
 for(var i=0; i< enemyNames.length; i++) {
     //if player is still alive, keep fighting
     if (playerHealth > 0){
         //let player know what round they are in,remember that arrays start at 0 so it needs to have 1 added to it
         window.alert("Welcome to Robot Gladiators! Round" +(i+1));
         //pick new enemy to fight based on the index of the enemyNames array
         var pickedEnemyName =enemyNames[i];

         //reset enemyHealth before starting new fight
         enemyHealth=50;

         //use debugger to pause script from running and check what's going on at that moment in the code
         //debugger;

         //pass the pickedEnemyName variable's value into the fight function, where it will assume that value of the enemyName parameter
         fight(pickedEnemyName);
         //if player isn't alive,stop the game
;     }else{
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}
    //funtion to start a new game
    
 var StartGame = function() {
     //reset player stats
     playerHealth=100;
     playerAttack=10;
     playerMoney=10;

     //otherlogic remains the same

    for(var i =0; i< enemyNames.length; i++) {
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round" + (i+1));


            var pickedEnemyName = enemyNames [i];

            enemyHealth = 50;

            fight(pickedEnemyName);

        
    }
    else{
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
     //after the loop ends,player is either out of health or enemies to fight, so run the endGame function
     endGame();
};
}
 }
=======
         window.alert(enemy.name +'still has' + enemy.health +'health left.');
     }

    //remove player's health by subtracting the amount set in the enemy.attack variable
  
     var damage= randomNumber(enemy.attack - 3, enemy.attack);
     playerInfo.health=Math.max(0,playerInfo.health- damage);
     
    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemy.name + 'attacked ' + playerInfo.name + '.' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
     );
     //check players health
     if(playerInfo.health <= 0) {
         window.alert(playerInfo.name+"has died!"); 
         //leave while()loop if player is dead
         break;
     } else {
         window.alert(playerInfo.name+'still has' +playerInfo.health +'health left.');
     
     }
    } //end of while loop

} ; //end of fight function
   
// function to start game fight ()
var startGame = function() {
    //reset player status
    playerInfo.reset
//fight each enemy-robot by looping over them and fighting them one at a time
 for(var i=0; i< enemyInfo.length; i++) {
    // if player is still alive,keep fighting next enemy
     if (playerInfo.health > 0){
         //let player know what round they are in,remember that arrays start at 0 so it needs to have 1 added to it
         window.alert("Welcome to Robot Gladiators! Round" +(i+1));
         //pick new enemy to fight based on the index of the enemyInfo array
         var pickedEnemyObj =enemyInfo[i];
         //set health for picked enemy
         pickedEnemyObj.health=randomNumber(40,60);
         //pass the pickedEnemyName variable's value into the fight function, where it will assume that value of the enemyName parameter
         fight(pickedEnemyObj);
         //if player is still alive,and we're not at at the last enemy in the array
         if(playerInfo.health>0 && i <enemyNames.length -1){
             //ask if player wants to use the store before next round
             var storeConfirm =window.confirm("The fight is over visit the store before the next round?");
             //if yes, take them to the store() function
             if(storeConfirm) {
                 shop();
             }
         }
     }
//if player is not alive, break out of the loop and let endGame function run
else{
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}
 }
     //after the loop ends,player is either out of health or enemies to fight, so run the endGame function
     endGame();
};
>>>>>>> develop


 
//function to end the entire game
var endGame =function() {
<<<<<<< HEAD
    //if player is still alive, player wins!
    if(playerHealth >0) {
        window.alert("Great job, you've survived the game! You now have a score of "+playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
=======
    window.alert("The game has now ended,Let's see how you did!");
    //if player is still alive, player wins!
    if(playerInfo.health >0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '.');
    }
    else {
        window.alert("Thank you for playing Robot Gladiatores! Come back soon!");
    }
};
//go to shop between battles function
var shop= function(){
    //ask player what they'd like to do
    var shopOptionPrompt=window.prompt(
        ''
    )
     //function to generate a random numeric value

     var randomNumber = function() {
        var value=Math.floor(Math.random()*21)+40;

        return value;
    };

>>>>>>> develop
  //ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
      //restart the game
      StartGame();
  }
  else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }

};
<<<<<<< HEAD
}

endGame()
 //Alerts the player's total stats

 //Ask the player if they want to play again

 //if yes,call startGame() to restart the game

  //Ask the player if they want to "shop"
  shop()

  //ask  player if they want to "refill" health, "upgrade" attack, or "leave" the shop

  //if refill, subtract money points from player and increase health

  //if upgrade,subtract moeny points from player and increase attack power

  //if leave, alert goodbye and exit the function

  //if any other invalid option, call shop() again
  
=======
//go to shop between battles function

var shop = function(){
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt (
      'Would you like to REFILL your health, UPGRADE your attack, or LEAVE  they store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.'

  );
  //use switch to carry out action
  switch(shopOptionPrompt){
      case "REFILL":
      case "refill":
          playerInfo.refillHealth();
          break;
      case "UPGRADE":
      case"upgrade": 
      playerInfo.upgradeAttack();
      break;
      case "LEAVE": 
      case "leave":
          window.alert("Leaving the store.");

          //do nothing, so function will end
          break;
          default:
              window.alert("You did not pick a valid option. Try again.");

              //call shop() again to force player to pick a valid option
              shop()
              break;

  }
};
/* END GAME FUNCTIONS */
/* GAME INFORMATION / VARIABLES */

// player information
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    }
  };
  
  // enemy information
  var enemyInfo = [
    {
      name: 'Roborto',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Amy Android',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Robo Trumble',
      attack: randomNumber(10, 14)
    }
  ];
  
  console.log(enemyInfo);
  console.log(enemyInfo[0]);
  console.log(enemyInfo[0].name);
  console.log(enemyInfo[0]['attack']);
  
  /* END GAME INFORMATION / VARIABLES */
  
  /* RUN GAME */
  startGame();
>>>>>>> develop
