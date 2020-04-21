const express = require('express');
const knex = require('knex');
const create = require('./controllers/create');
const read = require('./controllers/read');
const update = require('./controllers/update');
const deleteRoute = require('./controllers/deleteRoute');

const db = knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'adarsh',
      password : 'adarsh111',
      database : 'mounty_hotel'
    }
});

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    res.json('Welcome to Mounty');
})

app.post('/create', create.handleCreate(db));

app.get('/read', read.handleRead(db));

app.put('/update/ac', update.updateAcStatus(db));
app.put('/update/geyser', update.updateGeyserStatus(db));
app.put('/update/wifi', update.updateWifiStatus(db));
app.put('/update/breakfast', update.updateBreakfastStatus(db));

app.delete('/deleteRoute', deleteRoute.deleteRoom(db));

app.listen(3000);