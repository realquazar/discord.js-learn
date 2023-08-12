const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('channelmsg')
  .setDescription('Sends a message to the channel specified by the user')
  .addStringOption(option =>
    option.setName('channel')
      .setDescription('Channel to send the message')
      .setRequired(true)
  )
  .addStringOption(option => 
    option.setName('message')
    .setDescription('Message to be sent')
    .setRequired(true)
  ),
  async execute(interaction) {
    const channelArgument = interaction.options.getString('channel');
    const messageContent = interaction.options.getString('message');

    const channelMatch = channelArgument.match(/<#(\d+)>/)
  }
  
}
