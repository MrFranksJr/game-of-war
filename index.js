import { preLoadImage, reloadDefaultCards, calcWinner } from "./data/utils.js"

let deckId
const baseUrl = 'https://deckofcardsapi.com/api/deck'
const deckCount = 'deck_count=1'
const remainingCardsEl = document.getElementById('remaining-cards')

function getDeck() {
    fetch(baseUrl+"/new/shuffle/?"+deckCount)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            remainingCardsEl.innerHTML = `${data.remaining} Cards Remaining in Deck`
            reloadDefaultCards()
            deckId = data.deck_id
        })
}

function drawCards() {
    fetch(`${baseUrl}/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(calcWinner(data.cards))
            remainingCardsEl.innerHTML = `${data.remaining} Cards Remaining in Deck`
            let i = 0
            reloadDefaultCards()
            for (let card of data.cards) {
                if (i === 0) {
                    i++
                    preLoadImage(card.image, 'card-1') 
                } 
                else if (i === 1) {
                    preLoadImage(card.image, 'card-2')
                }
            }
    })
}

document.getElementById("new-deck").addEventListener("click", getDeck)
document.getElementById("new-cards").addEventListener("click", drawCards)

window.onload = getDeck()