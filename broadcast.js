const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.MessageContent, 
        GatewayIntentBits.GuildMessages 
    ]
});
client.on('messageCreate', async message => {
if (message.content.startsWith('$broadcast')) {
const broadcastMessage = message.content.slice(11);

message.guild.members.fetch().then(members => {
members.forEach(member => {
if (!member.user.bot) {
member.send(` <@${member.id}>, ${broadcastMessage}`).then(() => {
console.log(`sent message to ${member.user.username}`);
message.channel.send(`done sending to ${member.user.username}`);
}).catch(error => {
console.log(`failed to send message to ${member.user.username}: ${error}`);
});
}
});
});
}
});


client.login('MTMwNjU2OTAwNDMzMjA5MzUwMw.Gb8v6Y.RnCOxP4rpIaqNbGXb9Gz0HLltssdR5izCs6P5Y');

