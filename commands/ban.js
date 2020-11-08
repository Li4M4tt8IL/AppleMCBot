const discord = require('discord.js');

exports.run = (bot, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.cache.find(role => role.id === bot.guildConfig[message.guild.id]["modRole"]);

    if (!modRole)
        return console.log("The Mods role does not exist");

    if (!message.member.roles.cache.has(modRole.id))
        return message.reply("You can't use this command.");

    if (message.mentions.members.size === 0)
        return message.reply("Please mention a user to ban");

    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
        return message.reply("");

    const banMember = message.mentions.members.first();

    banMember.ban({days: 7, reason: reason.join(" ")}).then(member => {
        message.reply(`${member.user.username} was succesfully banned.`);
    });
};
 
module.exports.config = {
    name: "ban",
    description: "Banuje użytkownika",
    usage: "ban @user [powód]",
    accessibility: "Administracja",
    aliases: []
}