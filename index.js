import { preLoadImage, reloadDefaultCards, calcWinner, allCardTypes } from "./data/utils.js"

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
            document.getElementById("new-cards").disabled = false
        })
    for (let card of allCardTypes) {
        let result = preLoadImage(`https://deckofcardsapi.com/static/img/${card}.png`)
        document.getElementById('hidden-placeholder').appendChild(result)
    }
}

function drawCards() {
    reloadDefaultCards()
    document.getElementById("new-cards").disabled = true
    fetch(`${baseUrl}/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            remainingCardsEl.innerHTML = `${data.remaining} Cards Remaining in Deck`
            let i = 0
            for (let card of data.cards) {
                if (i === 0) {
                    i++
                    document.getElementById('card-1').src = preLoadImage(card.image).src

                } 
                else if (i === 1) {
                    document.getElementById('card-2').src = preLoadImage(card.image).src
                }
            }
            document.getElementById('battle-outcome').innerText = calcWinner(data.cards)
        })
        .then(() => {
            document.getElementById("new-cards").disabled = false
        })
}

document.getElementById("new-deck").addEventListener("click", getDeck)
document.getElementById("new-cards").addEventListener("click", drawCards)

window.onload = getDeck()