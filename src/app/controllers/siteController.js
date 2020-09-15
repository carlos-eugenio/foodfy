//const siteModel = require('../models/siteModel')
const data = require("../../config/data")


module.exports = {
    home(req, res){
        return res.render("./site/home", { items: data })
    },
    about(req, res){
        return res.render("./site/about")
    },
    allRecipes(req, res){
        return res.render("./site/recipes", { items: data })
    },
    recipeDetails(req, res){
        const id = req.params.id
        const info_recipe = data.find( id_recipe => id_recipe.id === `${id}` )
        return res.render("./site/recipe-details", { items: info_recipe })
    }
}