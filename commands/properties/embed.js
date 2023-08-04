const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('embed')
  .setDescription('Creates an embed with your profile picture'),

  async execute(interaction) {
    const user = interaction.user;
    const userAvatarUrl = user.displayAvavtarURL({ format: 'png', dynamic: true });

    const Embed1 = new EmbedBuilder()
    .setColor()
    .setTitle('User Profile Picture')
    .setDescription("Displays a user's profile picture in an embed")
    .setURL('https://discord.js.org/')
    .setThumbnail(userAvatarUrl)
    .setImage(userAvatarUrl)
    .setFooter({ text: 'Text Message', iconURL: userAvatarUrl })
    .addFileds(
      {name: 'Name', value: 'Age'},
      {name: 'Name1', value: '15'},
      {name: 'Name2', value: '23'},
    )
    interaction.channel.send({embeds: [Embed1]})
  }
}
