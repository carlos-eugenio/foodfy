
// Mostrar/Esconder modo de preparo/ingredientes da receita
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

// Adicionar ingredientes da receita - Area administrativa
// CORRIGIR cloneNode, está clonando todos os campos
document.querySelector(".add-preparation").addEventListener("click", addDirections);
document.querySelector(".add-ingredient").addEventListener("click", addIngredient);  

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    if (newField.children[0].value == "") return false;
  
    newField.children[0].value = "";
    ingredients.appendChild(newField.children[0]);
  }
  
// Adicionar modo de preparo da receita - Area administrativa
function addDirections() {
    const directions = document.querySelector("#directions");
    const fieldContainer = document.querySelectorAll(".preparation");
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    if (newField.children[0].value == "") return false;
  
    newField.children[0].value = "";
    directions.appendChild(newField.children[0]);
}


