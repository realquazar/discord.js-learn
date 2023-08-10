const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('info')
  .setDescription('Displays the information of the user')
  .addUserOption(option =>
    option.setName('member')
    .setDescription('User')
    .setRequired(false)
  ),

  async execute(interaction) {
    const memberOption = member.options.get('member');
    let member;

    if (memberOption) {
      member = memberOption.member;
    }
    else {
      member = interaction.member;
    }

    if (member) {
      const userId = member.user.id;
      const joinDate = member.joinedAt.toDateString();
      const roles = member.roles.cache.map(role => role.name).join(', ');
      await interaction.reply(`User ID: ${userId}\nJoin Date: ${joinDate}\nRoles: ${roles}`)
    }
    else {
      await interaction.reply(`Error: User info not found`)
    }
  },  
};
