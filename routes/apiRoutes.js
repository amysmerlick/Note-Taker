const router = require('express').Router();
const Notes = require('../db/Notes.js')
router.get("/notes", (req, res)=>{
    Notes.getNotes().then(notes =>res.json(notes)).catch(err=>res.status(500).json(err))
})
router.post("/notes", (req, res)=>{
    Notes.addNote(req.body).then(notes =>res.json(notes)).catch(err=>res.status(500).json(err))
})

router.delete("/notes/:id", (req, res)=>{
    Notes.deleteNote(req.params.id)
})
module.exports = router;