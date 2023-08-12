const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('channelmsg')
  .setDescription('Sends a message to the channel specified by the user')
  .addStringOption(option =>
    option.setName('channel')
      .setDescription('Channel to send the message')
      .setRequired(true)
  ),
  async execute(interaction) {}
  
}
