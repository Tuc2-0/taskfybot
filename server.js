const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on("messageCreate", async msg => {
    if ( msg.author.bot ) return;
    if ( msg.content.toLowerCase( ).includes("task") ) {
        msg.reply("Task??")
    }
});