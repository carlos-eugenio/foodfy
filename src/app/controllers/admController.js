//const admModel = require('../models/admModel')
const data = require("../../config/data")

module.exports = {
    index(req, res){
        return res.render("./admin/home", { items: data })
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
        // Instructor.paginate(params, function(instructors) {
        //     const pagination = {
        //         total: Math.ceil(instructors[0].total / limit),
        //         page
        //     }
        //     return res.render("instructors/index", { instructors, pagination, filter })
        // })
    
    },
    create(req, res){
        return res.send("Adm - Create")
        // return res.render("instructors/create")
    },
    post(req, res){
        return res.send("Adm - post")
        // const keys = Object.keys(req.body)

        // for(key of keys) {
        //     if(req.body[key] == ""){
        //         return res.send('Please, fill in all fields!')
        //     }    
        // }

        // const values = [
        //     req.body.name,
        //     req.body.avatar_url,
        //     req.body.gender,
        //     req.body.services,
        //     date(req.body.birth).iso,
        //     date(Date.now()).iso
        // ]

        // Instructor.create(values, function(instructor){
        //     return res.redirect(`/instructors/${instructor.id}`)
        // })    
    },
    show(req, res){
        const id = req.params.id
        const info_recipe = data.find( id_recipe => id_recipe.id === `${id}` )
        return res.render("./admin/show", { items: info_recipe })
    },
    edit(req, res){
        // Instructor.find(req.params.id, function(instructor) {
        //     if (!instructor) return res.send("Instructor not found!")

        //     instructor.birth = date(instructor.birth).iso

        //     return res.render("instructors/edit", { instructor })
        // })
        const id = req.params.id
        const info_recipe = data.find( id_recipe => id_recipe.id === `${id}` )
        return res.render("./admin/edit", { items: info_recipe })
    },
    put(req, res){
        return res.send("Adm - Put")
        // const keys = Object.keys(req.body)

        // for(key of keys) {
        //     if(req.body[key] == ""){
        //         return res.send('Please, fill in all fields!')
        //     }    
        // }

        // const values = [            
        //     req.body.avatar_url,
        //     req.body.name,
        //     date(req.body.birth).iso,
        //     req.body.gender,
        //     req.body.services,            
        //     req.body.id
        // ]

        // Instructor.update(values, function() {
        //     return res.redirect(`/instructors/${req.body.id}`)
        // })
    },
    delete(req, res){
        return res.send("Adm - Delete")
        // Instructor.delete(req.body.id, function(){
        //     return res.redirect(`/instructors`)
        // })
    }
}