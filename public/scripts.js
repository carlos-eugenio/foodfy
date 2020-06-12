const cards = document.querySelectorAll('.card')
const recipe_description = document.querySelectorAll('.recipe-description')

for (let card of cards) {
    card.addEventListener("click", function(){
        const recipeId = card.getAttribute("id")
        window.location.href = `/receitas/${recipeId}`
    })
}

for (let recipe of recipe_description) {
    const recipe_nav = recipe.querySelector('a')
    recipe_nav.addEventListener("click", function(){        
        const recipe_article = recipe.querySelector('article')
    
        if (recipe_article.classList.contains('active')){
            recipe_nav.innerHTML = 'MOSTRAR'
            recipe_article.classList.remove('active')  
        }
        else {            
            recipe_nav.innerHTML = 'ESCONDER'
            recipe_article.classList.add('active')
        }
    })
}