/**
 * zorg ervoor dat je onderstaande zaken kan verwezelijken met deze API:
 *
 * 1. geef alle kinderen weer.
 * 2. Van 1 kind alle info + de id en naam van de geschenkjes
 * 3. Kinderen toevoegen aan te lijst
 * 4. Geschenken kan toevoegen aan het lijstje van een kind
 * 5. Geschenken kan wissen van de lijst van een kind
 *
 * succes!!
 */
const kinderen = require("../databank/data")

const postAll = (req, res) => {
    res.json(kinderen)
}

module.exports = {
    postAll
}