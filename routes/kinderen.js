const express = require("express")
const kinderenFuncties = require("../controllers/kinderen")

const routes = express.Router()

routes.get("/", kinderenFuncties.postAll)

module.exports = routes