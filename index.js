import { preLoadImage } from "./data/utils.js"

let deckId
const baseUrl = 'https://deckofcardsapi.com/api/deck'
const deckCount = 'deck_count=1'

function getDeck() {
    fetch(baseUrl+"/new/shuffle/?"+deckCount)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('remaining-cards').innerHTML = `${data.remaining} Cards Remaining in Deck`
            deckId = data.deck_id
        })
}

function drawCards() {
    if (deckId) {
        fetch(`${baseUrl}/${deckId}/draw/?count=2`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                document.getElementById('remaining-cards').innerHTML = `${data.remaining} Cards Remaining in Deck`
                let i = 0
                for (let card of data.cards) {

                    if (i === 0) {
                        i++
                        document.getElementById('card-1').src = "/img/card-back.png"
                        preLoadImage(card.image, 'card-1') 
                    } 
                    else if (i === 1) {
                        document.getElementById('card-2').src = "/img/card-back.png"
                        preLoadImage(card.image, 'card-2')
                    }
                }
        })
    } else {
        alert('Shuffle a new deck first!')
    }
}

document.getElementById("new-deck").addEventListener("click", getDeck)
document.getElementById("new-cards").addEventListener("click", drawCards)

getDeck()