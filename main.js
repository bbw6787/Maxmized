var DiscordJS = require("discord.js");
var client = new DiscordJS.Client();

// Import Command
var suggestionCommand = require('./commands/suggestion.js');
var bugCommand = require('./commands/bug.js');

var config = {
    token: 'NDU3MjMyNTgxMjMwODU0MTQ0.DgWgNQ.tBzapT5X6MhEaQyv4sL28TaxZGs',
    logoEmoji: '<:logo:450149200794091520>'
}

client.on("ready", () => {
    console.log("Bot connected with username: " + client.user.tag);
});

client.on("message", msg => {
    var args = msg.content.split(" ");
    switch ( msg.channel.name ) {
        case "suggestions":
            if ( msg.author.id == client.user.id ) {
                break;
            }
            msg.delete().catch(console.error);
            break;
    }
    switch ( args[0] ) {
        case "!suggestion":
            suggestionCommand.addSuggestion(msg, args);
            break;
    }
});
client.on("message", msg => {
    var args = msg.content.split(" ");
    switch ( msg.channel.name ) {
        case "bugs":
            if ( msg.author.id == client.user.id ) {
                break;
            }
            msg.delete().catch(console.error);
            break;
    }
    switch ( args[0] ) {
        case "!bug":
            bugCommand.addbug(msg, args);
            break;
    }	
});

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "welcome")
    .send(config.logoEmoji + " Welcome " + member.toString() + " to **MaximizedMC**'s official Discord server! " + config.logoEmoji)
    .catch(console.error);
});
client.login(config.token);