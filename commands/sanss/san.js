const commando = require('discord.js-commando');

class san extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'san',
            group: 'sanss',
            memberName: 'san',
            description: 'sans'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("we live in a society, where gamers are being segregated, harassed, and even killed. gamers   rise  up. ");
    }
}

module.exports = san;
