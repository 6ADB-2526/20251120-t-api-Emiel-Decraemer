/**
 * zorg ervoor dat je onderstaande zaken kan verwezelijken met deze API:
 *
 * 1. geef alle kinderen weer.  klaar
 * 2. Van 1 kind alle info + de id en naam van de geschenkjes  klaar
 * 3. Kinderen toevoegen aan te lijst
 * 4. Geschenken kan toevoegen aan het lijstje van een kind
 * 5. Geschenken kan wissen van de lijst van een kind
 *
 * succes!!
 */
const alleData = require("../databank/data")

const alleKinderen = (req, res) => {
    res.json(alleData.kindjes)
}

const eenKind = (req, res) => {
    res.json(alleData.kindjes.filter((kind) => kind.id == req.params.ID))
}

const maakNieuwKind = (req, res) => {
    const kind = {id:undefined, achternaam:undefined, voornaam:undefined, geschenk:undefined}
        kind.id = getMaxID()+1
        kind.achternaam = req.body.naam
        kind.voornaam = req.body.voornaam
        kind.geschenk = req.body.geschenk
    kind.push(alleData.kindjes)
}

const geefNieuwGeschenk = (req, res) =>{
    
}

module.exports = {
    alleKinderen,
    eenKind,
    maakNieuwKind,
    geefNieuwGeschenk
}