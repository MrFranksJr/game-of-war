export { preLoadImage, reloadDefaultCards, calcWinner, allCardTypes, computerScore, playerScore }

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
        return 'Computer wins this round!!'
    } else if (card2ValueIndex > card1ValueIndex) {
        playerScore ++
        return 'You win this round!!'
    } else {
        return 'WAR!'
    }
}