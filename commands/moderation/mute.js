const { SlashCommandBuilder } = require('discord.js')
const ms = require('ms')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('mute')
  .setDescription('Mute a member')
  .addUserOption(option =>
  option.setName('user')
    .setDescription('User to mute')
    .setRequired(true)
  )
  
  .addStringOption(option =>
  option.setname('duration')
    .setDescription('Duration of the mute (Ex: 1h, 30m)')
    .setRequired(true)
  )
  
  .addStringOption(option => 
  option.setName('reason')
    .setDescription('reason for kick')
  ),

  async execute(interaction) {
    let user = interaction.options.getMember('user');
    let member = interaction.guild.members.fetch(user.id);
    let time = interaction.options.getString('duration');
    let convertedTime = ms(time);
    let reason = interaction.options.getSting('reason') || 'No reason provided'

    if (!user) {
      return interaction.reply('User not found')
    }

    try {
      await member.timeout(convertedTime, reason);
      await interaction.reply(`${member} has been muted for ${time}. Reason: ${reason}`);
    }
    catch (error) {
      console.error(error)
      await interaction.reply('An error occurred')
    }
  }  
};
