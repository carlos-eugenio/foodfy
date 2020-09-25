const Site = require('../models/Site')


module.exports = {
    home(req, res){
        Site.all(function(recipes) {
            if (!recipes) return res.send("Database error!")
            return res.render("./site/home", { items: recipes })
        })
    },
    about(req, res){
        return res.render("./site/about")
    },
    allRecipes(req, res){
        Site.all(function(recipes) {
            if (!recipes) return res.send("Database error!")
            return res.render("./site/recipes", { items: recipes })
        })
    },
    recipeDetails(req, res){
        Site.find(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")
            
            items = {
                ...recipe,
                ingredients: recipe.ingredients.replace(/{"|"}/gi, "").split('","'),
                preparation: recipe.preparation.replace(/{"|"}/gi, "").split('","')
            }

            return res.render("./site/recipe-details", { items } )
        })
    }
}