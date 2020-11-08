const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        mongoose.connect('mongodb+srv://pmdev:fHOuHqY3TkNsJ3Ih@cluster0.s1fe6.mongodb.net/guilds', dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('[DB] Mongoose has connected!');
        });

        mongoose.connection.on('err', (err) => {
            console.error('[DB] \n' + err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('[DB] Mongoose has disconnected!');
        });
    }
}