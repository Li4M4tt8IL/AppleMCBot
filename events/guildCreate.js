const discord = require("discord.js");
const fs = require('fs');

module.exports = (bot, guild) => {
    if(!bot.guildConfig[guild.id]) {
        bot.guildConfig[guild.id] = {
            'channelJoin': '0',
            'channelLeave': '0',
            'startRole': '0',
            'modRole': '0',
            "totalUsers": "0",
            "totalMembers": "0",
            "totalBots": "0",
            "totalOnline": "0"
        };
        console.log(`[GuildInfo] Added guild called ${guild.name} with ${guild.memberCount} members to the config!`);
        console.log(bot.guildConfig);
        fs.writeFileSync("./guildInfo.json", JSON.stringify(bot.guildConfig), (err) => {
            if(err) console.log(err);
        });
    }
}