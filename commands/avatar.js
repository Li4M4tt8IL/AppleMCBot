const discord = require("discord.js")

exports.run = (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({dynamic: true});

    const embed = new discord.MessageEmbed()
        .setColor(bot.colors.blue)
        .setTitle(`Avatar użytkownika ${user.username}`)
        .setImage(avatar)
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "avatar",
    description: "Wysyła avatar oznaczonego użytkownika.",
    usage: "avatar",
    accessibility: "Members",
    aliases: ['av', 'user-avatar']
}