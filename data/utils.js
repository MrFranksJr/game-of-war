export { preLoadImage }

function preLoadImage(imagePath, cardOnTable) {
    const drawnCard = new Image()
    drawnCard.src = imagePath
    document.getElementById(cardOnTable).src = drawnCard.src
}