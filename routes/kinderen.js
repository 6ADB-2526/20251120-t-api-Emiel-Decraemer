const express = require("express")
const kinderenFuncties = require("../controllers/kinderen")

const routes = express.Router()

routes.get("/allemaal", kinderenFuncties.alleKinderen)
routes.get("/eenKind/:ID", kinderenFuncties.eenKind)
routes.put("/nieuwKind", kinderenFuncties.maakNieuwKind)
routes.put("/nieuwGeschenk", kinderenFuncties.geefNieuwGeschenk)

module.exports = routes