/* declare and initialize variables */
var player, score1, score2, rndone, goal, Chek, Count1, Count2;
player=1;
score1=0;
score2=0;
goal=30;
Chek = 1;
Count2 = 0;
Count1 = 0;
/* button to trigger play function on click event */
$(document).ready(function(){$("#btnStart").click(function(){
    TimerFunc(5000);
});});


/* Set Timout */
function TimerFunc(val) {
    setTimeout(playOnFunc, val)
    Chek = 0;
}

/* Set Timout */
function playOnFunc() {
    /* Set next player when time is up */
    nextplayer();
    /* Alert next player to be ready */
    alert("Your Time is up!!! Time for player " + player)
    /* Ensure next player clicks on Start Game button when ready */
    /* This will ensure equal timing of gamer */
    Chek = 1;
}

/* button to trigger play function on click event */
$(document).ready(function () {
    $("#btnroll").click(function () {
        /* Gamer has to Click Start button to start */
        if (Chek == 1) {
            alert("Click Start Game button to Play");
        } else {
            /* call play function */
            play();
        }
    });
});

/* function to initialize the game */
function play(){
    rndone=Math.floor(Math.random()*6)+1;
    if(rndone==1){
        /* Zero the scores if random number is 1 */
        randnum1(player);
    }else{
        /* Collect Scores */
        sumscores();
    }
}

/* works random number is 1 */
function randnum1(plyr) {
    if (plyr == 1) {
        score1 = 0;
        document.getElementById("Results-1").value = score1;
    } else if (plyr == 2) {
        score2 = 0;
        document.getElementById("Results-2").value = score2;
    }
}

/* function to allocate player chance to play */
function nextplayer(){
    if (player == 1) {
        player=2;
        Count1 += 5;
        document.getElementById("Time-1").value = Count1 +" Seconds";
    }else if(player==2){
        player=1;
        Count2 += 5;
        document.getElementById("Time-2").value = Count2 + " Seconds";
    }
    /* Check if target has been met */
    vwTaget(player)
}

/* function to get sum of points for the 2 players */
function sumscores(){
    if(player==1){
        score1+=rndone;
        document.getElementById("Results-1").value=score1;
    }else if(player==2){
        score2+=rndone;
        document.getElementById("Results-2").value=score2;
    }
}

/* function with parameter to check if Goal is met */
/* clears display controls when goal is met */
function vwTaget(plyr){
    if((Count1+Count2)==goal){
        if (score1 > score2) {
            document.getElementById("Disp").value = "WE HAVE A WINNER!!!!! Player <( 1 )> Has WON with <( " + score1 + " )> points";
        } else {
            document.getElementById("Disp").value = "WE HAVE A WINNER!!!!! Player <( 2 )> Has WON with <( " + score2 + " )> points";
        }
    }

}


/* button to trigger resetGame function on click event */
$(document).ready(function () {
    $("#btnReset").click(function () {
        restGame();
    });
});

/* Reset Function */
function restGame() {
        score1 = 0;
        score2 = 0;
        Count1 = 0;
        Count2 = 0;
        document.getElementById("Results-1").value = score1;
        document.getElementById("Results-2").value = score2;
        document.getElementById("Time-1").value = score1;
        document.getElementById("Time-2").value = score2;
        document.getElementById("Disp").value = "";
}
