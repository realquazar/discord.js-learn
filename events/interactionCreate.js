const { Events } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(`No command found: ${interaction.commandName}`);
      return;
    }
    try {
      await commands.execute(interaction);
    }
    catch (error) {
      console.error(`Error executing: ${interaction.commandName}`)
      console.error(error);
    }
  }
}
