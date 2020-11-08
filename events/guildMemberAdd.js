const discord = require("discord.js")
const { Canvas, resolveImage } = require("canvas-constructor")

module.exports = async (bot, member) => {
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
    if(bot.guildConfig[member.guild.id]["channelJoin"] !== "0") {
        let channel = member.guild.channels.cache.find(channel => channel.id === bot.guildConfig[member.guild.id]["channelJoin"]);

        const image = await resolveImage('./resources/images/koncept1.png')
        let avatar = await resolveImage(member.user.avatarURL({format: 'png'}))

        let final = new Canvas(1920, 1080)
            .printImage(image, 0, 0, 1920, 1080)
            .printCircle(960, 440, 200)
            .printCircularImage(avatar, 960, 440, 200)
            .setTextAlign("center")
            .setTextFont('bold 72px sans-serif')
            .setColor(bot.colors.white)
            .printText("Nowy gracz na serwerze!", 960, 740)
            .setTextFont('thin 72px sans-serif')
            .printText(`Witaj ${member.user.username}#${member.user.discriminator}`, 960, 840)
            // .printText(`Jesteś naszym ${message.guild.memberCount} użytkownikiem!`, 960, 940) optionalne
            .toBuffer();

        if(bot.guildConfig[member.guild.id]["startRole"] !== "0") {

            let startRole = member.guild.roles.cache.find(role => role.id === bot.guildConfig[member.guild.id]["startRole"]);
            member.roles.add(startRole);

        }
        await channel.send(`Witaj ${member.user} na naszym serwerze!`, {files: [final]});
    }
}