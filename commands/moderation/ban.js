const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('ban a member')
    .addUserOption(option =>
    option.setName('user')
        .setDescription('user to ban')
        .setRequired(true))
    .addStringOption(option =>
    option.setName('reason')
        .setDescription('reason for ban')
    ),
    async execute(interaction) {
        
        let user = interaction.options.getMember('user')
        let member = await interaction.guild.members.fetch(user.id);
        let reason = interaction.options.getString('reason') || 'no reason provided'

        try {
            await member.ban({reason})
            await interaction.reply(`${user} was banned for ${reason}`)
        }
        catch (error) {
            console.error(error)
            await interaction.reply('Error')
        }
    }
}
