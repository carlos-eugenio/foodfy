const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const cardImg = card.getElementsByClassName("card__image-container")[0].querySelector("img").src
        const cardTitle = card.getElementsByClassName("card__title")[0].querySelector("p").innerHTML
        const cardAuthor = card.getElementsByClassName("card__author")[0].querySelector("p").innerHTML
        modalOverlay.getElementsByClassName("modal__image-container")[0].querySelector("img").src = cardImg
        modalOverlay.getElementsByClassName("modal__title")[0].querySelector("p").innerHTML = cardTitle
        modalOverlay.getElementsByClassName("modal__author")[0].querySelector("p").innerHTML = cardAuthor
        modalOverlay.classList.add('active')
    })
}

document.querySelector(".modal__close").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})
