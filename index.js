const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const emojiSteal = require('./modules/system');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    emojiSteal.handleEmojiSteal(message);
});

client.login(process.env.TOKEN);