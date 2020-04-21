const express = require('express');
const create = require('./controllers/create');
const read = require('./controllers/read');
const update = require('./controllers/update');

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    res.json('Welcome to Mounty');
})

app.post('/create', create.handleCreate());

app.get('/read', read.handleRead());

app.put('/update/ac', update.updateAcStatus());
app.put('/update/geyser', update.updateGeyserStatus());

//app.delete('/delete', delete.handleDelete());

app.listen(3000);