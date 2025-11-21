const express = require("express");
const ctrlGeschenk = require("../controllers/geschenken");

// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan

routes.get("/", ctrlGeschenk.lijstGeschenken);
routes.get("/getOne/:ID", ctrlGeschenk.geschenkInfo);
routes.put("/add", ctrlGeschenk.geschenkToevoegen);
routes.delete("/delete/:ID", ctrlGeschenk.geschenkWissen);

// exporteer het router object
module.exports = routes;
