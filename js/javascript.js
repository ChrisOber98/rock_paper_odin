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
    const result_div = document.querySelector(".result-output");
    const score_div = document.querySelector(".score-output");

    if (humanChoice === computerChoice)
    {
        result_div.textContent = "TIE";
        score_div.textContent = humanScore;
        return;
    }

    if (humanChoice === "rock")
    {
        if (computerChoice === "paper")
        {
            computerScore++;
            result_div.textContent = "paper beats rock u lose!";
            score_div.textContent = humanScore;
        }
        else
        {
            humanScore++;
            result_div.textContent = "rock beats scissors u win!";
            score_div.textContent = humanScore;
        }
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "rock")
        {
            humanScore++;
            result_div.textContent = "paper beats rock u win!";
            score_div.textContent = humanScore;
        }
        else
        {
            computerScore++;
            result_div.textContent = "scissors beats rock u lose!";
            score_div.textContent = humanScore;
        }
    }
    else
    {
        if (computerChoice === "rock")
        {
            computerScore++;
            result_div.textContent = "rock beats scissors u lose!";
            score_div.textContent = humanScore;
        }
        else
        {
            humanScore++;
            result_div.textContent = "scissors beats paper u win!";
            score_div.textContent = humanScore;                 
        }
    }
}

humanScore = 0;
computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => 
{
    button.addEventListener("click", () => 
    {
        playRound(getHumanChoice(), getCompMove());
    })
});