const express = require('express');
const create = require('./controllers/create');

const app = express();
app.use(express.json());

app.post('/create', create.handleCreate());

//app.get('/read', read.handleRead());

//app.put('/update', update.handleUpdate());

//app.delete('/delete', delete.handleDelete());

app.listen(3000);