const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const cardImg = card.querySelector("#card__image-link").src
        const cardTitle = card.querySelector("#card__title").innerHTML
        const cardAuthor = card.querySelector("#card__author").innerHTML
        modalOverlay.querySelector("#modal__image-link").src = cardImg
        modalOverlay.querySelector("#modal__title").innerHTML = cardTitle
        modalOverlay.querySelector("#modal__author").innerHTML = cardAuthor
        modalOverlay.classList.add('active')
    })
}

document.querySelector(".modal__close").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})