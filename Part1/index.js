// Check to see that the files are linked

console.log("I am in another file");

let tracker = [];

function play (id) {
    const playerSpan = document.getElementById("player");
    const clickedSpot = document.getElementById(id);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedSpot.innerText = 'X';
        tracker[id] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedSpot.innerText = 'O';
        tracker[id] = 'O';
    }
    console.log(tracker);
}


/*
    WIN: To determine a win, check all combinations and their values. Since you have each spot
    referenced into the tracker, it will be easier to reference values. 
    You should only have to check empty spots 8 times - 3 times horizontally, 3 times vertically, 2 times diagonally.
    DRAW: Using above logic, if none of the combos work, it's a draw.
    LOSS: Theoretically, this will be coded in the WIN portion, since whoever didn't win is 
    the loser.

    NOTE: I tried to avoid this method using loops to check spots relative to my reference spot, but
    couldn't seem to get the logic flowing. Will try that on my own time.
*/

const topLeft = tracker[0];
const topMiddle = tracker[1];
const topRight = tracker[2];
const midLeft = tracker[3];
const midMiddle = tracker[4];
const midRight = tracker[5];
const bottomLeft = tracker[6];
const bottomMiddle = tracker[7];
const bottomRight = tracker[8];

function declareWinner (e) {
    
}

if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
    alert(topLeft + " is the winner!");
    return;
} else if (topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft) {
    alert(topLeft + " is the winner!");
    return;
} else if (topLeft !== undefined && topLeft === midMiddle && topLeft === bottomRight) {
    alert(topLeft + " is the winner!");
    return;
} else if (topMiddle !== undefined && topMiddle === midMiddle && topMiddle === bottomMiddle) {
    alert(topMiddle + " is the winner!");
    return;
} else if (topRight !== undefined && topRight === midMiddle && topRight === bottomLeft) {
    alert(topRight + " is the winner!");
    return;
} else if (topRight !== undefined && topRight === midRight && topRight === bottomRight) {
    alert(topRight + " is the winner!");
    return;
} else if (midLeft !== undefined && midLeft === midMiddle && midLeft === midRight) {
    alert(midLeft + " is the winner!");
    return;
} else if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    alert(bottomLeft + " is the winner!");
    return;
}

let drawGame = true;

for (let i = 0; i < tracker.length; i++) {
    if (tracker[i] === undefined) {
        drawGame = false; // If there's nothing in every spot, it's not technically a draw.
    }
    if (drawGame === true) {
        alert("Draw game, no winner."); // If there's something in every spot and no winner, game's over.
    }
}