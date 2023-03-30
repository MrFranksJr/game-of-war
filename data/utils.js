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
    const cardValues = {
        'A': 14,
        'K': 13,
        'Q': 12,
        'J': 11,
        '0': 10,
        '9': 9,
        '8': 8,
        '7': 7,
        '6': 6,
        '5': 5,
        '4': 4,
        '3': 3,
        '2': 2
      }

      const card1Score = cardValues[drawnCards[0].code.slice(0, -1)]
      const card2Score = cardValues[drawnCards[1].code.slice(0, -1)]

      if (card1Score > card2Score) {
        return 'Computer wins!! Score: ' + card1Score
      } else if (card2Score > card1Score) {
        return 'You win!! Score: ' + card2Score
      } else {
        return 'Tie!! Score: ' + card1Score
      }
}