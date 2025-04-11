
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

const prefix = "!";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.channel.send("Pong! 🏓");
    }

    if (command === "help") {
        message.channel.send("Available commands: !ping, !help");
    }
});

client.login("MTM1Njk3OTQ0MTY2MTkwMjg1OQ.GtBEJE.LL4MS7LXTqYBZlsP28QbJ4zH0_pLsDsq17_EIU");
