var player1count=0;
var player2count=0;
var player1weapon;
var player2weapon;
var round=1;
var maxwins=0;
var winner;
var weaponOfChoice;


while(maxwins<3)
{
    /*select player 1 weapon*/
    var weapons = ['rock' , 'paper', 'scissors'];
    weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    player1weapon = weaponOfChoice;

    /*select player 2 weapon*/
    var weapons = ['rock' , 'paper', 'scissors'];
    weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    player2weapon = weaponOfChoice;

    /*choose winner*/
    if(player1weapon=="rock"&&player2weapon=="paper"){player2count++;}
  
    if(player1weapon=="rock"&&player2weapon=="scissors"){player1count++;}
   
    if(player2weapon=="rock"&&player1weapon=="paper"){player1count++;}
    
    if(player2weapon=="rock"&&player1weapon=="scissors"){player2count++;}
    
    if(player1weapon=="rock"&&player2weapon=="rock"){} 
    if(player1weapon=="paper"&&player2weapon=="paper"){} 
    if(player1weapon=="scissors"&&player2weapon=="scissors"){} 

    if(player1count>player2count){maxwins=player1count;}
    if(player2count>player1count){maxwins=player2count;}

    round++;
}
    /* output */
    console.log("Round: "+round+" ");
    if(player1count>player2count){winner="Player 1"}
    if(player1count<player2count){winner="Player 2"}
    if(player1count==player2count){winner="No one"}
    console.log("Winner is: "+winner)
