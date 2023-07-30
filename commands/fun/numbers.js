const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('num')
  .setDescription('prints numbers to n (accepted by the user)'),

  options: [
    {
      name: 'num',
      description: 'Enter the integer value you want the number to be displayed to (1-20)',
      type: 4,
      min_value: 1,
      max_value: 20
    }
  ],
  
  async execute(interaction) {
    let limit = interaction.options.getInteger('limit')
    for (let i=0; i<=limit; i++) {
      await interaction.channel.send(i.toString())
    }
  }  
}
