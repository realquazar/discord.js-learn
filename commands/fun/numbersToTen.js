const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  name: 'num',
  description: 'prints numbers from 1 to 10',

  async execute(interaction) {
    for (let i = 1; i<=10; i++) {
      await interaction.channel.send(i.toString());
    }
  }  
}
