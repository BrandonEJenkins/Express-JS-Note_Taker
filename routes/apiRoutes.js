const router = require('express').Router();
const { to } = require('await-to-js');
const Store = require('../db/store');
const store = new Store();

// api/notes
router.get("/notes", async (req, res) => {
    const [err, notes] = await to (store.getNotes());

    if (err) return res.status(500).json(err);
    return res.json(notes);
});

router.post("/notes", function (req, res) {
    store.addNote(req.body)
    .then(note => res.json(note))
});

router.delete("/notes/:id", function (req, res) {
    store.removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
});

module.exports = router;

// const express = require('express');

// const app = express();
// const PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));

// app.listen(PORT, function() {
//     console.log('App is listening on 8080');
// });