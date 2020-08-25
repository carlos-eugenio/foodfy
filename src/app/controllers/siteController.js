//const siteModel = require('../models/siteModel')
const data = require("./data")


module.exports = {
    home(req, res){
        return res.render("home", { items: data })
        // let { filter, page, limit } = req.query

        // page = page || 1
        // limit = limit || 2
        // let offset = limit * (page - 1)

        // const params = {
        //     filter,
        //     page,
        //     limit,
        //     offset,
        //     // Função de callback junto do params
        //     // Como tinham mostrado no curso
        //     // callback(instructors){
        //     //     const pagination = {
        //     //         total: Math.ceil(instructors[0].total / limit),
        //     //         page
        //     //     }
        //     //     return res.render("instructors/index", { instructors, pagination, filter })
        //     // }
        // }

        // // Minha implementação - Igual as outras para manter padronização
        // Member.paginate(params, function(members) {
        //     const pagination = {
        //         total: Math.ceil(members[0].total / limit),
        //         page
        //     }
        //     return res.render("members/index", { members, pagination, filter })
        // })
    },
    about(req, res){
        return res.render("about")
    },
    allRecipes(req, res){
        return res.render("recipes", { items: data })
    },
    recipeDetails(req, res){
        const id = req.params.id
        const info_recipe = data.find( id_recipe => id_recipe.id === `${id}` )
        return res.render("recipe-details", { items: info_recipe })
    }
}