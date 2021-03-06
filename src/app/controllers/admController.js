const Adm = require('../models/Adm')

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

        const id_title = req.body.recipe_title.replace(/[^\w\-]+/g, '-').toLowerCase()

        console.log(id_title)

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
        Adm.find(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")

            items = {
                ...recipe,
                ingredients: recipe.ingredients.replace(/{"|"}/gi, "").split('","'),
                preparation: recipe.preparation.replace(/{"|"}/gi, "").split('","')
            }

            return res.render("./admin/show", { items })
        })    
    },
    edit(req, res){
        Adm.find(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")

            items = {
                ...recipe,
                ingredients: recipe.ingredients.replace(/{"|"}/gi, "").split('","'),
                preparation: recipe.preparation.replace(/{"|"}/gi, "").split('","')
            }

            return res.render("./admin/edit", { items })
        })
    },
    put(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == ""){
                return res.send('Please, fill in all fields!')
            }    
        }

        const id_title = req.body.recipe_title.replace(/[^\w\-]+/g, '-').toLowerCase()

        const values = [
            id_title,
            req.body.recipe_title,
            req.body.recipe_image,
            req.body.recipe_author,
            req.body.recipe_ingredients,
            req.body.recipe_preparation,
            req.body.recipe_information,
            req.body.id
        ]

        Adm.update(values, function(recipe){
            return res.redirect(`/admin/recipes/${req.body.id}`)
        }) 
    },
    delete(req, res){
        Adm.delete(req.body.id, function(){
            return res.redirect(`/admin/recipes`)
        })
    }
}