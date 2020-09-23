const Adm = require('../models/Adm')
const data = require("../../config/data")

module.exports = {
    index(req, res){
        Adm.all(function(recipes) {
            if (!recipes) return res.send("Database error!")

            return res.render("./admin/home", { items: recipes })
        })
    },
    create(req, res){
        return res.render("./admin/create")
    },
    post(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == ""){
                return res.send('Please, fill in all fields!')
            }    
        }

        //id_title

        const values = [
            id_title,
            req.body.recipe_title,
            req.body.recipe_image,
            req.body.recipe_author,
            req.body.recipe_ingredients,
            req.body.recipe_preparation,
            req.body.recipe_information
        ]

        Adm.create(values, function(recipe){
            return res.redirect(`/admin/recipes/${recipe.id}`)
        })    
    },
    show(req, res){
        const id = req.params.id
        const info_recipe = data.find( id_recipe => id_recipe.id === `${id}` )
        return res.render("./admin/show", { items: info_recipe })
    },
    edit(req, res){
        const id = req.params.id
        const info_recipe = data.find( id_recipe => id_recipe.id === `${id}` )
        return res.render("./admin/edit", { recipe: info_recipe })
    },
    put(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == ""){
                return res.send('Please, fill in all fields!')
            }    
        }

        //id_title

        const values = [
            id_title,
            req.body.recipe_title,
            req.body.recipe_image,
            req.body.recipe_author,
            req.body.recipe_ingredients,
            req.body.recipe_preparation,
            req.body.recipe_information
        ]

        Adm.update(values, function(recipe){
            return res.redirect(`/admin/recipes/${recipe.id}`)
        }) 
    },
    delete(req, res){
        Adm.delete(req.body.id, function(){
            return res.redirect(`/admin/recipes`)
        })
    }
}