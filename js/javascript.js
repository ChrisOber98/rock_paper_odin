function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getCompMove() {
    let move = getRandomInt(3);

    if (move === 0)
    {
        return "rock"
    }
    else if (move === 1)
    {
        return "paper"
    }
    else
    {
        return "scissors"
    }
}

console.log(getCompMove());
console.log(getCompMove());
console.log(getCompMove());
console.log(getCompMove());