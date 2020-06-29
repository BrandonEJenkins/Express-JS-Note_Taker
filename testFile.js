const Store = require('./db/store');
const { to } = require('await-to-js');

async function start() {
    
    const store = new Store();
    let [err, data] = await to(store.read());
    if (err) throw (err);
    
    console.log(err);
    console.log(data);
    data = JSON.parse(data);
    
    const note = { title:'Test Title 2',text:'Test text 2'};
    data.push(note);
    
    const [error, data2] = await to (store.write(data));
    if (error) throw (error);
    [err, data] = to(await store.read());
    if (err) throw err;
    console.log(data);

    const [parsedErr, parsedNotes] = await to(store.getNotes());
    console.log(parsedNotes);
}

try {
    start();
} catch (error) {
    console.log(error)
}

