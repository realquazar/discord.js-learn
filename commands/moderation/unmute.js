const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('unmute')
  .setDescription('Unmute a member')
  .addUserOption(option =>
    option.setName('user')
      .setDescription('User to unmute')
      .setRequired(true)
  ),
  async execute(interaction) {
    let user = interaction.options.getUser('user');
    let member = interaction.guild.members.fetch(user.id);

    if (!user) {
      return interaction.reply('User not found');
    }

    try {
      await member.timeout(null);
      await interaction.reply(`User ${member} has been unmuted`);
    }
    catch (error) {
      console.error(error)
      await interaction.reply('An error occurred');
    }
  }
};
