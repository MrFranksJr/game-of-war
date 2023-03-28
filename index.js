let deckId
const baseUrl = 'https://deckofcardsapi.com/api/deck'
const deckCount = 'deck_count=1'

function getDeck() {
    fetch(baseUrl+"/new/shuffle/?"+deckCount)
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
        })
}

function drawCards() {
    if (deckId) {
        fetch(`${baseUrl}/${deckId}/draw/?count=2`)
            .then(res => res.json())
            .then(data => {
                let cardHtml = ''
                console.log(data)
                for (let card of data.cards) {
                    console.log(card.code)
                    cardHtml += `<img src="${card.image}" alt='card ${card.value} of ${card.suit}' class='card-img'>`
                    console.log(cardHtml)
                }
                document.getElementById('card-images').innerHTML = cardHtml
            })
    } else {
        alert('Shuffle a new deck first!')
    }
}

document.getElementById("new-deck").addEventListener("click", getDeck)
document.getElementById("new-cards").addEventListener("click", drawCards)

getDeck()