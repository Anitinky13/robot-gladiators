var playerName=window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney= 10;
//You can also log mulptiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = [ "Roborto", "Amy Android", "Robo Trumble"];
console.log (enemyNames);
var enemyHealth = 50;
var enemyAttack =12;
//fight function
var fight =function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    //Fight or Skip this battle
    var promptFight =window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player choses to fight, then fight
    if (promptFight ==="fight"|| promptFight==="FIGHT"){
    // remove enemy's health by subtracting the amount set in the playerAttack variable
     enemyHealth=enemyHealth-playerAttack;

    //Log a resulting message to the console so we know that it worked.
     console.log(
         playerName+ "attacked" + enemyName +" ."+enemyName +"now has " +enemyHealth +"health remaining."
     );
     //check enemy's health
     if(enemyHealth <=0) {
         window.alert(enemyName +"has died!");
     }
     else {
         window.alert(enemyName +" still has" + enemyHealth +"health left.");
     }
    //remove player's health by subtracting the amount set in the enemyAttack variable
     playerHealth=playerHealth-enemyAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
     );
     //check players health
     if(playerHealth <= 0) {
         window.alert(playerName+"has died!"); 
     }
     else {
         window.alert(playerName+"still has" +playerHealth +"health left.");
     
     }
     //if player choses to skip
    } else if (promptFight==="skip" || promptFight ==="SKIP") {
        //CONFIRM PLAYER WANTS TO SKIP
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
        //if yes(tru),leave fight
        if (confirmSKip) {
            window.alert(playerName + "has desided to skip this fight. Goodbye!");
            //subtract moneyr from playerMoney for skipping
            playerMoney =playerMoney-2;
        }
    //if no(false), ask question again by running fight()again
    else{
        fight();
    }
//if player did not chose 1 or 2 in prompt
    } else{
        window.alert("You need to choose a valid option. Try again!");
    }
}; // end of fight function
//run fight function to start game fight ();

//Game States


//"WIN" -Player robot has defeated all evnemy-robots

 var enemy1 = "Roborto" ;
 var enemy2 = "Amy Android";
 var enemy3 = "Robo Trumble" ;
//*Fight all enemy-robots

//*Defeat each enemy-robot

//"LOSE" -Player robot's health is zero or less



