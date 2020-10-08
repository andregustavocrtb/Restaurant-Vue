const express = require('express')
const routes = express.Router()
const products = require('../controllers/productController')

routes.get('/prod', products.findAll)
routes.post('/prod', products.create)
routes.delete('/prod:id', products.delete)

module.exports = routes