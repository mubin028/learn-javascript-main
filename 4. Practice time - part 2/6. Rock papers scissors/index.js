let hands = ["rock", "paper", "scissor"]

function gethand() {
    let randomindex = Math.floor(Math.random()*hands.length)
    return (hands[randomindex])
}

console.log(gethand())