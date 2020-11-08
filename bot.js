const discord = require('discord.js');
const bot = new discord.Client({ disableEveryone: true });
const botConfig = require('./config.json');
const guildConfig = require("./guildInfo.json");
const colorConfig = require("./colors.json");

bot.config = botConfig;
bot.guildConfig = guildConfig;
bot.colors = colorConfig;
bot.mongoose = require('./utils/mongoose')
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

require('./utils/commandHandler')(bot);
require('./utils/eventHandler')(bot);

bot.mongoose.init();
bot.login(bot.config.token);