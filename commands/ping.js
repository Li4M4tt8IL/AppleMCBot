module.exports.run = async (bot, message, args) => {
    message.reply('Pong!');
}

module.exports.config = {
    name: "ping",
    description: "Podstawowa komenda.",
    usage: "ping",
    accessibility: "Użytkownicy",
    aliases: []
}