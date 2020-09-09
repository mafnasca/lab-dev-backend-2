const express = require('express');
const cors = require('cors');

const principles = require('./data/principles');
const app = express();

app.use(cors());

const PORT = 8080;

// Expose PORT 8080 
app.listen(PORT, () => {
    console.log(`The server has been started`);
})

// Root of the api
app.get('/api/', (_, res) => {
    res.send(`Welcome to the technical lab developer api`);
})

// Sends the list of all members to the UI
app.get('/api/principles', (_, res) => {
    res.json(principles);
})

// Sends the UI the selected member 
app.get('/api/principles/:id', (req, res) => {
    const selectedPrinciple = principles.filter(principle => principle.id === Number(req.params.id));
    if (!selectedPrinciple) {
        return res.status(404).send('Principle Not Found');
    }
    res.json(selectedPrinciple);
})