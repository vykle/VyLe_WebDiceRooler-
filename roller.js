function RollSixSidedDice() {
    //generate random number from 1 to 6
    let result1 = Math.floor(Math.random()*6) + 1;
    let result2 = Math.floor(Math.random()*6) + 1;

    //display the result on the fields
    document.getElementById("xID").value = result1;
    document.getElementById("yID").value = result2;

    //calculate the result 
        if(result1 == result2) {
            document.getElementById("dice").value = "Draw!";
        }
        else if(result1 > result2) {
            document.getElementById("dice").value = "Player 1 wins!";
        }
        else {
            document.getElementById("dice").value = "Player 2 wins!";
        }
}

