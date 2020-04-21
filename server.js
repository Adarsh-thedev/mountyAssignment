const express = require('express');
const create = require('./controllers/create');
const read = require('./controllers/read');

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    res.json('Welcome to Mounty');
})

app.post('/create', create.handleCreate());

app.get('/read', read.handleRead());

//app.put('/update', update.handleUpdate());

//app.delete('/delete', delete.handleDelete());

app.listen(3000);