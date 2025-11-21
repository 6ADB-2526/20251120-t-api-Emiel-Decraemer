/**
 * zorg ervoor dat je onderstaande functies werken
 *
 * 1. Zorg dat je een lijst van alle geschenken kan krijgen (enkel de id en de naam).  klaar
 * 2. Zorg dat je op basis van een verkregen ID de details van een geschenk kan teruggeven  klaar
 * 3. Zorg ervoor dat via postman nieuwe (andere zaken dan onderstaand) kan toevoegen aan de lijst van
 * geschenken.  klaar
 * 4. Zorg ervoor dat een geschenk enkel gewist kan worden als het in geen enkel lijstje staat.
 *
 * succes!!
 */

// connecteer de datagegevens aan de controller
const { sinterklaasGeschenken: geschenken } = require("../databank/data");
const { all } = require("../routes/geschenken");

// een lijst met alle geschenken weergeven

const lijstGeschenken = (req, res) => {
  allPresents = []  // lege array voor alle presents maken
  geschenken.forEach(geschenk => { // alle id's en namen in de array steken
    allPresents.push(geschenk.id, geschenk.naam)
  }); 
  res.json(allPresents)  // de array sturen naar de client
};

// info van 1 geschenk vinden

const geschenkInfo = (req, res) => {
  res.json(geschenken.filter((geschenk) => geschenk.id == req.params.ID)) // het geschenk vinden en versturen
};

// geschenk toevoegen
const lijstMetID = []

geschenken.forEach(geschenk => {
  lijstMetID.push(geschenk.id)
});

const newID = (lijstMetID) => {
  lijstMetID.forEach((item) => {
    maxID = 0;
    item.id > maxID ? (maxID = item.id) : (maxID = maxID);
  });
  return maxID + 1;
};

const geschenkToevoegen = (req, res) => {
  const newGeschenk = {
    id: newID,
    naam: "KarelKleintjes-tshirt",
    categorie: "textiel",
    prijs: 20.5,
  };
  geschenken.push(newGeschenk);
  res.json(geschenken);
};

const geschenkWissen = (req, res) => {
  const geschenkToDel = geschenken.find(
    (geschenk) => geschenk.id == req.params.ID
  );
  const indexToDel = geschenken.indexOf(geschenkToDel);

  geschenken.splice(indexToDel, 1);
  res.json({ resultaat: "gelukt" });
};

module.exports = {
  lijstGeschenken,
  geschenkInfo,
  geschenkToevoegen,
  geschenkWissen,
};
