const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('kick')
  .setDescription('kick a member')
  .addUserOption(option =>
  option.setName('user')
  .setDescription('User to kick')
  .setRequired(true)
  )
  .addStringOption(option =>
  option.setName('reason')
  .setDescription('Reason for kick')
  ),

  async execute(interaction) {
    const targetUser = interaction.options.getMember('user');
    const reason = interaction.options.getString('reason') || 'no reason provided';

    if (!targetUser) {
      return interaction.reply('User not found');
    }
    if (!targetUser.kickable) {
      return interaction.reply('Cannot kick the specified user.');
    }

    try {
      await targetUser.kick(reason)
      return interaction.reply(`Kicked ${targetUser} from the server. Reason: ${reason}`)
    }
    catch (error) {
      console.error(error)
      await interaction.reply('An error occurred while kicking the user.');
    }
  }  
};
