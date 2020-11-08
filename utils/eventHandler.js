const fs = require('fs');
const ascii = require('ascii-table');
const eventsTable = new ascii().setHeading('Event', 'Status');

module.exports = (bot) => {
    fs.readdir("./events/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {

            if (!file.endsWith(".js")) return;

            const event = require(`../events/${file}`);

            let eventName = file.split(".")[0];

            bot.on(eventName, event.bind(null, bot));
            eventsTable.addRow(eventName, '✅ Loaded!');
            delete require.cache[require.resolve(`../events/${file}`)];
        });
        console.log(eventsTable.toString());
    });
}