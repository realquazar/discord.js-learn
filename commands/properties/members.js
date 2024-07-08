// Fetch all the members from a guild

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.GuildMembers],
});

client.on('ready', async () => {
    console.log('Bot is ready!');
    const guild = client.guilds.cache.get('YOUR_GUILD_ID');
    if (guild) {
        await guild.members.fetch(); // Fetch all members
        guild.members.cache.forEach((member) => {
            console.log(`User: ${member.user.username}`);
        });
    }
});

client.login('YOUR_BOT_TOKEN');
