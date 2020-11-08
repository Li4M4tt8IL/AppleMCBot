const discord = require('discord.js');
const fs = require('fs');

module.exports.run = (bot, message, args) => {
    let user = message.author;
    fs.readdir("./commands/", (err, files) => {
        const embed = new discord.MessageEmbed()
            .setColor(bot.colors.gold)
            .setTitle("Komendy")
            .setFooter(`Komendy`, `${user.avatarURL()}`)
            .setTimestamp();
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let pull = require(`../commands/${file}`);
            embed.addField(pull.config.name, `**Opis**: ${pull.config.description}\n**Stosowanie**: ${bot.config.prefix}${pull.config.usage}\n**Dostępność komendy**: ${pull.config.accessibility}\n**Skróty**: ${pull.config.aliases}`, true)
        });
        message.channel.send(embed);
    });
}

module.exports.config = {
    name: "help",
    description: "Pomoc.",
    usage: "help",
    accessibility: "Użytkownicy",
    aliases: ['pomoc']
}