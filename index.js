import { preLoadImage, reloadDefaultCards, calcWinner, allCardTypes, computerScore, playerScore, calcGameWinner, showModalAndBlur, resetScore } from "./data/utils.js"

let deckId
const baseUrl = 'https://deckofcardsapi.com/api/deck'
const deckCount = 'deck_count=1'
const remainingCardsEl = document.getElementById('remaining-cards')

async function getDeck() {
    resetScore()
    const res = await fetch(baseUrl+"/new/shuffle/?"+deckCount)
    const data = await res.json()
    remainingCardsEl.innerHTML = `${data.remaining} Cards Remaining in Deck`
    reloadDefaultCards()
    deckId = data.deck_id
    document.getElementById("new-cards").disabled = false
        
    for (let card of allCardTypes) {
        let result = preLoadImage(`https://deckofcardsapi.com/static/img/${card}.png`)
        document.getElementById('hidden-placeholder').appendChild(result)
    }
}

async function drawCards() {
    reloadDefaultCards()
    document.getElementById("new-cards").disabled = true

    const response  = await fetch(`${baseUrl}/${deckId}/draw/?count=2`)
    const data = await response.json()
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
    document.getElementById('battle-outcome').innerHTML = calcWinner(data.cards)
    document.getElementById('computer-score').textContent = computerScore
    document.getElementById('player-score').textContent = playerScore

    if (remainingCardsEl.innerHTML === '0 Cards Remaining in Deck') {
        calcGameWinner()
    } else {
        document.getElementById("new-cards").disabled = false
    }
}

document.getElementById("new-deck").addEventListener("click", getDeck)
document.getElementById("new-cards").addEventListener("click", drawCards)
document.getElementById("modal-close-btn").addEventListener("click", showModalAndBlur)
document.getElementById("modal-newgame-btn").addEventListener("click", () => document.location.reload())

window.onload = getDeck()