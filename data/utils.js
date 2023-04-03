export { preLoadImage, reloadDefaultCards, calcWinner, allCardTypes, computerScore, playerScore, calcGameWinner, showModalAndBlur, resetScore }

const allCardTypes = [
    'AS', 'AD', 'AC', 'AH',
    '2S', '2D', '2C', '2H',
    '3S', '3D', '3C', '3H',
    '4S', '4D', '4C', '4H',
    '5S', '5D', '5C', '5H',
    '6S', '6D', '6C', '6H',
    '7S', '7D', '7C', '7H',
    '8S', '8D', '8C', '8H',
    '9S', '9D', '9C', '9H',
    '0S', '0D', '0C', '0H',
    'JS', 'JD', 'JC', 'JH',
    'QS', 'QD', 'QC', 'QH',
    'KS', 'KD', 'KC', 'KH',
]
let computerScore = 0
let playerScore = 0

function resetScore() {
    computerScore = 0
    playerScore = 0
    document.getElementById('computer-score').textContent = computerScore
    document.getElementById('player-score').textContent = playerScore
    document.getElementById('battle-outcome').innerHTML = `It's WAR!!`
}

function preLoadImage(imagePath) {
    const drawnCard = new Image()
    drawnCard.src = imagePath
    return drawnCard
}

function reloadDefaultCards() {
    document.getElementById('card-1').src = "/img/card-back.png"
    document.getElementById('card-2').src = "/img/card-back.png"
}

function calcWinner(drawnCards) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    
    const card1ValueIndex = valueOptions.indexOf(drawnCards[0].value)
    const card2ValueIndex = valueOptions.indexOf(drawnCards[1].value)

    if (card1ValueIndex > card2ValueIndex) {
        computerScore++
        return `Computer wins this round<br>with a ${drawnCards[0].value}!!`
    } else if (card2ValueIndex > card1ValueIndex) {
        playerScore ++
        return `You win this round<br>with a ${drawnCards[1].value}!!`
    } else {
        return 'WAR!'
    }
}

function getSiblingsElements(e) {
    let siblings = []

    if(!e.parentNode) {
        return siblings
    }

    let sibling = e.parentNode.firstChild

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }
    return siblings
}

function showModalAndBlur() {
    document.getElementById('end-modal').classList.toggle('modalVisible')
    for (let sibling of getSiblingsElements(document.getElementById('end-modal'))) {
        sibling.classList.toggle('blurred')
    }
}

function calcGameWinner() {
    let winnerMessage = document.getElementById('winner-message')
    let scoreField = document.getElementById('score-field')
    let battleOutcome = document.getElementById('battle-outcome')
    document.getElementById("new-cards").disabled = true
    if (computerScore < playerScore) {
        winnerMessage.textContent = 'You win this game!'
        battleOutcome.textContent = 'You won this game!'
        scoreField.innerHTML = `Your score: ${playerScore}<br>Computer Score: ${computerScore}`
    } else if (computerScore > playerScore) {
        winnerMessage.textContent = 'Computer wins this game!'
        battleOutcome.textContent = 'Computer won this game!'
        scoreField.innerHTML = `Your score: ${playerScore}<br>Computer Score: ${computerScore}`
    } else {
        winnerMessage.textContent = `It's a Tie!`
        battleOutcome.textContent = `It's a Tie!`
        scoreField.innerHTML = `Your score: ${playerScore}<br>Computer Score: ${computerScore}`
    }
    showModalAndBlur()
}