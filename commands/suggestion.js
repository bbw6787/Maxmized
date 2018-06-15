module.exports.addSuggestion = function(msg, args) {
    if ( msg.channel.name !== "suggestions" ) {
        msg.author.send("You can only use that command in the #suggestions channel :hushed:")
        .catch(console.error);
        return;
    }
    if ( args.length < 5 ) {
        msg.author.send(`
Woops! The syntax of the command is incorrect :grimacing:
Correct usage: **!suggestion (your ign) (platform ID) (description)**

**Platform IDs:**
    1: In-Game
    2: Discord

Remember to be as descriptive as possible, thank you for your time :relaxed:`)
        .catch(console.error);
        return;
    }

    if ( args[1].length < 2 || args[1].length > 16 ) {
        msg.author.send('Hmm, it seems like your IGN is not valid, please use your correct IGN :wink:');
        return;
    }

    switch ( args[2] ) {
        case "1":
            platform = "In-Game";
            break;
        case "2":
            platform = "Discord"
            break;
        default:
            msg.author.send(`
Woops! That's not a valid Platform ID!

**Platform IDs:**
    1: In-Game
    2: Discord

Thank you for your time :relaxed:`)
            .catch(console.error);
            return;
    }

    var description = "";
    for ( var i = 3 ; i < args.length ; i++ ) {
        description += args[i] + " ";
    }
    description = description.slice(0, -1);
    /*var id = Math.floor(Math.random() * (99999 - 1 + 1)) + 1;

     **ID: **#' + id + '\n */
    var embed = {
        "title": "Suggestion added by " + msg.author.tag,
        "description": '**IGN: **' + args[1] + '\n**Platform: **' + platform + '\n**Description: **' + description,
        "color": 16517642,
        "timestamp": new Date(),
        "footer": {
            "text": "MaximizedMC"
        }
    }
    msg.channel.send({ embed })
    .then(message => {
        message.react('✅');
        setTimeout(function() {
            message.react('❌');
        }, 500);
    })
    .catch(console.error);

}
