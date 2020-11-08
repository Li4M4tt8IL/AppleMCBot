const discord = require("discord.js");
const moment = require('moment');

module.exports.run = (bot, message, args) => {
    let joinDiscord = moment.utc(message.guild.createdAt).format( 'dddd, MMMM Do YYYY, HH:mm:ss');
    let avatar = message.guild.iconURL({dynamic: true});

    const embed = new discord.MessageEmbed()
        .setColor(bot.colors.green)
        .setThumbnail(avatar)
        .addField("Nazwa", `${message.guild.name}`)
        .addField("Właściciel", `${message.guild.owner}`)
        .addField("ID", `${message.guild.id}`)
        .addField("Liczba użytkowników", `${message.guild.memberCount}`, true)
        .addField("Liczba emoji", `${message.guild.emojis.cache.size}`, true)
        .addField("Liczba roli", `${message.guild.roles.cache.size}`, true)
        .addField("Serwer stworzony", `${joinDiscord}`)
        .setFooter(`Information about ${message.guild}`, `${avatar}`)
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "server-info",
    description: "Sprawdza informacje o serwerze.",
    usage: "server-info",
    accessibility: "Użytkownicy",
    aliases: ['serverinfo', 'server', 'si']
}