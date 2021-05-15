const router = require('express').Router();
const notes = require('../db/Notes.js');


router.get("/notes", (req, res)=>{
    notes.getNotes().then(notes =>res.json(notes)).catch(err=>res.status(500).json(err))
})
router.post("/notes", (req, res)=>{
    notes.addNote(req.body).then(notes =>res.json(notes)).catch(err=>res.status(500).json(err))
})

router.delete("/notes/:id", (req, res)=>{
    notes.deleteNote(req.params.id)
})
module.exports = router;