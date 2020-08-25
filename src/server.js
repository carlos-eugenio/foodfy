const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
//server.use(express.static('assets'))
server.use(methodOverride('_method'))
server.use(routes)
server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true
})

// server.get("/", function(req, res) {
//     return res.render("home", { items: data })
// })

// server.get("/sobre", function(req, res) {
//     return res.render("about")
// })

// server.get("/receitas", function(req, res) {
//     return res.render("recipes", { items: data })
// });

// server.get("/receitas/:id", function(req, res) {
//     const id = req.params.id
//     const info_recipe = data.find( id_recipe => id_recipe.id === `${id}` )
//     return res.render("recipe-details", { items: info_recipe })
// });

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function() {
    console.log("Server is running")
})