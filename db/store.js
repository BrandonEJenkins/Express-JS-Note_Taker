const util = require('util');
const fs = require('fs');
const path = require('path');
const { to } = require('await-to-js');

const { v1: uuidv1 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const DB = path.join(__dirname, 'db.json');

class Store {
    read() {
        return readFileAsync(DB, 'utf-8');
    }

    write(note) {
        return writeFileAsync(DB, JSON.stringify(note));
    }

    async getNotes() {
        const notes = await this.read();
        let parsedNotes;

        parsedNotes = [].concat(JSON.parse(notes));

        return parsedNotes;
    }

    async addNote(note) {
        const notes = await this.getNotes();
        const updateNotes = [...notes, note];
        await this.write(updateNotes);
        return updateNotes;
    }

    // async addNote(note) {
    //     this.getNotes()
    //         .then(notes => [...notes, note])
    //         .then(updateNotes => this.write(updateNotes))
    //         .then(() => updateNotes);
    //     }


        async removeNote() {
            const notes = await this.getNotes()
                .then((remove) =>
                    remove.filter(removedNote => 
                    removedNote.id !== id)
                ).then((filteredNotes =>
                    this.write(filteredNotes)
                ));
        }

    };


module.exports = Store;