export { preLoadImage, reloadDefaultCards, calcWinner }

function preLoadImage(imagePath, cardOnTable) {
    const drawnCard = new Image()
    drawnCard.src = imagePath
    document.getElementById(cardOnTable).src = drawnCard.src
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
    return 'Computer wins!! Score: ' + drawnCards[0].value
    } else if (card2ValueIndex > card1ValueIndex) {
    return 'You win!! Score: ' + drawnCards[1].value
    } else {
    return 'Tie!! Score: ' + drawnCards[0].value
    }
}