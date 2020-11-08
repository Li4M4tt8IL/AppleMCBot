const discord = require('discord.js');
const { Canvas, resolveImage } = require("canvas-constructor");


module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;

    const image = await resolveImage('./resources/images/koncept1.png')
    let avatar = await resolveImage(user.avatarURL({format: 'jpg'}))

    let final = new Canvas(1920, 1080)
        .printImage(image, 0, 0, 1920, 1080)
        .printCircle(960, 440, 200)
        .printCircularImage(avatar, 960, 440, 200)
        .setTextAlign("center")
        .setTextFont('bold 72px sans-serif')
        .setColor(bot.colors.white)
        .printText("Nowy gracz na serwerze!", 960, 740)
        .setTextFont('thin 72px sans-serif')
        .printText(`Witaj ${user.username}#${user.discriminator}`, 960, 840)
        // .printText(`Jesteś naszym ${message.guild.memberCount} użytkownikiem!`, 960, 950) optionalne
        .toBuffer();

    await message.channel.send({files: [final]});
}

module.exports.config = {
    name: "profile-test",
    description: "Testowa komenda.",
    usage: "profile-test",
    accessibility: "Użytkownicy",
    aliases: []
}