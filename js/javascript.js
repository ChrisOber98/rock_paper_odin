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

function getHumanChoice() {
    let numb = Number(window.prompt("0 -> Rock, 1 -> paper, 2-> scissors: "))

    if (numb === 0)
    {
        return "rock"
    }
    else if (numb === 1)
    {
        return "paper"
    }
    else (numb === 2)
    {
        return "scissors"
    }
}

console.log(getHumanChoice())
console.log(getHumanChoice())
console.log(getHumanChoice())
console.log(getHumanChoice())