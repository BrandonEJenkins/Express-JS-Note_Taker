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

    async addNote() {
        const { title, text } = await this.getNotes()
            .then(notes => [...notes, addNote])
            .then(updateNotes => this.write(updateNotes))
            .then(() => addNote);
        }


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