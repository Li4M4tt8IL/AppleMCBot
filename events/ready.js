const discord = require("discord.js")
const ascii = require('ascii-table');
const table = new ascii().setHeading('Name', 'Discriminator', 'ID', 'Status');

module.exports = bot => {
    table.addRow(bot.user.username, "#"+bot.user.discriminator, bot.user.id, '✅ Online!');
    console.log(table.toString());
    bot.user.setActivity("NotLiam creating me!", { type: "WATCHING" });
}