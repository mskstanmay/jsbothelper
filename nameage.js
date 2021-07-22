const { MessageEmbed } = require('discord.js')

module.exports = {
  slash: true,
  testOnly: true, // Ensure you have test servers setup
  description: 'Displays your name and age', // Required for slash commands
  minArgs: 2,
  expectedArgs: '<Name> <Age>',
  callback: ({ args }) => {
    // Destructure the name and age from the args array
    const [name, age] = args

    // Create the embed
    const embed = new MessageEmbed()
      .setTitle('Example Embed')
      .addField('Name', name)
      .addField('Age', age)

    // The content to reply with must be returned from the callback function
    // This is required for slash commands exclusively
    return embed
  },
}