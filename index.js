const Discord = require('discord.js');
const bot = new Discord.Client();
const { token } = require('./config.json');
const ms = require('ms');


const prefix = '[Put your prefix here]'


bot.login(token);