const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
class Notes {
    read(){
        return readFile('db/db.json', 'utf8');
    }
    getNotes(){
        return this.read().then(notes =>{
            let notesArray = []
            try {
                notesArray = notesArray.concat(JSON.parse(notes))
            } catch (error) {
                notesArray = []
            }
        return notesArray
        })
    }
    addNote(note){
        //concat
        return this.getNotes().then
    }

    deleteNote(id){
        //filter
        return this.getNotes().then
    }
}

module.exports=new Notes()