const fs = require('fs');
const ascii = require('ascii-table');
const table = new ascii().setHeading('Command', 'Status');

module.exports = (bot) => {
    fs.readdir("./commands/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let pull = require(`../commands/${file}`);
            let commandName = file.split(".")[0];
            table.addRow(commandName, '✅ Loaded!');
            bot.commands.set(pull.config.name, pull);
            pull.config.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.config.name)
            })
        });
        console.log(table.toString());
    });
}