export { preLoadImage, reloadDefaultCards, calcWinner, allCardTypes }

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
    let computerArray = {
        message: 'Computer wins!! Score: ' + drawnCards[0].value,
        score: drawnCards[0].value,
    }
    let playerArray = {
        message: 'You win!! Score: ' + drawnCards[1].value,
        score: drawnCards[1].value,
    }

    document.getElementById('computer-score').innerText = Number(document.getElementById('computer-score').innerText) + Number(computerArray.score)
    document.getElementById('player-score').innerText = Number(document.getElementById('player-score').innerText) + Number(playerArray.score)

    if (card1ValueIndex > card2ValueIndex) {
        return computerArray.message
    } else if (card2ValueIndex > card1ValueIndex) {
        return playerArray.message
    } else {
        return 'WAR!' + drawnCards[0].value
    }
}