require('dotenv').config({ path: require('find-config')('.env') })
const express = require('express');
const axios = require('axios')
const { Telegraf } = require('telegraf');
const app = express();
const port = 4000;
const botToken = process.env.TELEGRAM_ACCESS_TOKEN
const chatID = '5098641310'
const bodyParser = require('body-parser');
const cors = require('cors');

// var dataToSend = "Hello Mateeeeeeeeeeeee"
// axios.post(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${dataToSend}`)

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/booking'
    , (req, res) => {
        const dataToSend = req.body;
        console.log(dataToSend)
        //axios.post(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${dataToSend}`);
    })

app.get('/api/test'
    , (req, res) => {
        res.json({ message: 'Hi from Express' })
    }
)

app.listen(port
    , () => {
        console.log('App listening to port', port)
    })