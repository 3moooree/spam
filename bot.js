const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("471483453121101826")
setInterval(function() {
channel.send(`we love 3MooRE`);
}, 30)
})

client.login(process.env.BOT_TOKEN);