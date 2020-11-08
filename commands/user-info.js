const discord = require("discord.js")
const moment = require('moment');

exports.run = (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({dynamic: true});
    let member = message.guild.member(user);

    let joinDiscord = moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss');
    let joinServer = moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss');

    const embed = new discord.MessageEmbed()
        .setColor('BLUE')
        .setThumbnail(avatar)
        .addField('Nazwa', `${user.username}`)
        .addField('Tag', `${user.discriminator}`)
        .addField('ID', `${user.id}`)
        .addField('Dołączono na serwer', `${joinServer}`, true)
        .addField('Konto stworzone', `${joinDiscord}`, true)
        .setFooter(`Informacje o ${user.username}`, `${avatar}`)
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "user-info",
    description: "Sprawdza informacje o użytkowniku.",
    usage: "user-info",
    accessibility: "Użytkownicy",
    aliases: ['userinfo', 'user', 'ui']
}