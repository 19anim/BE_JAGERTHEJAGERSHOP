const express = require('express');
const app = express();

app.get('/api/test'
    , (req, res) => {
        res.json({ message: 'Hi from Express' })
    }
)

app.listen(4000
    , () => {
        console.log('App listening to port 4000')
    })