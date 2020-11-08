const discord = require("discord.js");

module.exports = (bot, member) => {
    if(bot.guildConfig[member.guild.id]["totalUsers"] !== "0") {
        let totalUsers = member.guild.memberCount;
        let totalUsersChannel = member.guild.channels.cache.find(channel => channel.id === bot.guildConfig[member.guild.id]["totalUsers"]);

        totalUsersChannel.setName(`🌍 Użytkownicy ${totalUsers}`);
    }
    if(bot.guildConfig[member.guild.id]["totalMembers"] !== "0") {
        let totalMembers = member.guild.members.cache.filter(m => !m.user.bot).size;
        let totalMembersChannel = member.guild.channels.cache.find(channel => channel.id === bot.guildConfig[member.guild.id]["totalMembers"]);

        totalMembersChannel.setName(`👤 Gracze ${totalMembers}`);
    }
    if(bot.guildConfig[member.guild.id]["totalBots"] !== "0") {
        let totalBots = member.guild.members.cache.filter(m => m.user.bot).size;
        let totalBotsChannel = member.guild.channels.cache.find(channel => channel.id === bot.guildConfig[member.guild.id]["totalBots"]);

        totalBotsChannel.setName(`🤖 Boty ${totalBots}`);
    }
    if(bot.guildConfig[member.guild.id]["totalOnline"] !== "0") {
        let totalOnline = member.guild.members.cache.filter(m => m.user.presence.status !== "offline").size;
        let totalOnlineChannel = member.guild.channels.cache.find(channel => channel.id === bot.guildConfig[member.guild.id]["totalOnline"]);

        totalOnlineChannel.setName(`⌨ Online ${totalOnline}`);
    }
    if(bot.guildConfig[member.guild.id]["channelLeave"] !== "0") {

        const channel = member.guild.channels.cache.find(channel => channel.id === bot.guildConfig[member.guild.id]["channelLeave"]);
        channel.send(`${member.user} left this server.`).catch(console.error);
    }
}
