function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

function getCompMove() 
{
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

function getHumanChoice() 
{
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

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        console.log("TIE!");
        return;
    }

    if (humanChoice === "rock")
    {
        if (computerChoice === "paper")
        {
            computerScore++;
            console.log("paper beats rock u lose!");
        }
        else
        {
            humanScore++;
            console.log("rock beats scissors u win!");
        }
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "rock")
        {
            humanScore++;
            console.log("paper beats rock u win!");
        }
        else
        {
            computerScore++;
            console.log("scissors beats rock u lose!");
        }
    }
    else
    {
        if (computerChoice === "rock")
        {
            computerScore++;
            console.log("rock beats scissors u lose!");
        }
        else
        {
            humanScore++;
            console.log("scissors beats paper u win!");                   
        }
    }
}

humanScore = 0;
computerScore = 0;
