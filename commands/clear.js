const discord = require("discord.js")

module.exports.run = (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("You don't have the permission to do that!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a number, or it's less/equal than 0").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
        .catch(err => message.reply(`Something went wrong! ${err}`));

}

module.exports.config = {
    name: "clear",
    description: "Czyści wiadomości",
    usage: "clear [ilość]",
    accessibility: "Pomocnicy",
    aliases: ['c', 'purge']
}