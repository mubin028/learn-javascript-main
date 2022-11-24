// Try to modify the expression so that we get a range from 1 to 6

rollDice();

function rollDice() {
    let dice = Math.floor( Math.random() * 6 )+1
    console.log(dice)
}