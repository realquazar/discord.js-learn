const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCOmmandBuilder()
  .setName('ephemeral')
  .setDescription('Sends an ephemeral message'),

  async execute(interaction) {
    await interation.reply({ content: 'This is an ephemeral message', ephemeral: true })
  }
}

