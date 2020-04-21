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

app.post('/create', create.handleCreate());

app.get('/read', read.handleRead(db));

app.put('/update/ac', update.updateAcStatus());
app.put('/update/geyser', update.updateGeyserStatus());
app.put('/update/wifi', update.updateWifiStatus());
app.put('/update/breakfast', update.updateBreakfastStatus());

app.delete('/deleteRoute', deleteRoute.deleteRoom());

app.listen(3000);