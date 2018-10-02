const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord   = require('discord.js');
const client    = new Discord.Client();
const settings  = require('settings.json');

const prefix    = "-";
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('pong') 
  }
});

client.login(settings.token);