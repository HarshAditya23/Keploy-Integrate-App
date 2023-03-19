require("typescript-sdk/dist/integrations/express/register");
const express = require('express');
var app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({
	override: true
});

const apitoken = '3610a4fed02c4852a08163631232601';

app.use(express.json());

app.get('/', function(req, res) {
	res.send('Hello World!\n');
});

app.get('/:name', async(req, res) => {
	const name = req.params.name;
                console.log(`calling`);
	const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apitoken}&q=${name}`);
	res.send(response.data);
});

var server = app.listen(3000, () => {
	console.log(`Server is up and running on Port 3000`);
});
module.exports = server;