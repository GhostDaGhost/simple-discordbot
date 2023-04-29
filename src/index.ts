import DiscordJS, { Intents, Message } from 'discord.js';

const client: any = new DiscordJS.Client({
    ['intents']: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

// UPON BOT INITIALIZATION
client.on('ready', () => {
    console.log('simple-discordbot is now running.');

    // SET STATUS CIRCLE AND MESSAGE
    client.user.setStatus('dnd');
    client.user.setActivity('the world.', { ['type']: 'WATCHING' });
});

// MESSAGE / COMMAND LISTENER
client.on('messageCreate', (message: Message) => {
    console.log('message received', message['content']);
});

// BOT TOKEN ENTRY
//client.login(INSERT_TOKEN);
