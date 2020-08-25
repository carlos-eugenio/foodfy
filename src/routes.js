const express = require('express')
const routes = express.Router()
const siteController = require('./app/controllers/siteController')
const admController = require('./app/controllers/admController')

// Home
//routes.get("/", function(req, res) {
//    return res.render("home", { items: data })
//})

// Site
routes.get("/", siteController.home);
routes.get("/sobre", siteController.about);
routes.get("/receitas", siteController.allRecipes);
routes.get("/receitas/:id", siteController.recipeDetails);

// Área administrativa
routes.get("/admin/recipes", admController.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", admController.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admController.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admController.edit); // Mostrar formulário de edição de receita
routes.post("/admin/recipes", admController.post); // Cadastrar nova receita
routes.put("/admin/recipes", admController.put); // Editar uma receita
routes.delete("/admin/recipes", admController.delete); // Deletar uma receita

module.exports = routes