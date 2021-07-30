const { MessageEmbed } = require("discord.js");
const { Event } = require("gcommands");
const { MessageActionRow, MessageButton } = require("gcommands");
module.exports = class Msgevt extends Event {
  constructor(...args) {
    super(...args, {
      name: "message",
      once: false,
      ws: false,
    });
  }

  async run(client, message) {
    if (!message.guild) return;
    if (message.author.bot) return;
    if (
      message.content.includes("845288525791363142") &&
      message.content.length <= 22
    ) {
      return message.reply({
        embed: {
          color: "#32ddff",
          description: `I Only respond to slash cmds.`,
        },
      });
    }
    if (message.channel.id == "754000682171891743") {
      const acceptBTN = new MessageButton()
        .setLabel("APPROVE")
        .setStyle("green")
        .setID("suggestion_accept");
      const denyBTN = new MessageButton()
        .setLabel("DISSAPROVE")
        .setStyle("red")
        .setID("suggestion_deny");
      const delBTN = new MessageButton()
        .setLabel("DISCARD")
        .setStyle("grey")
        .setID("suggestion_delete");

      const interactiveButtons = new MessageActionRow().addComponents([
        acceptBTN,
        denyBTN,
        delBTN,
      ]);
      const embed = new MessageEmbed()
        .setColor("050505")
        .setDescription(`\n${message.content}`)
        .setTitle(`Suggestion | Status : Pending`)
        .setFooter(
          `${message.author.tag} | ${message.author.id}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp();
      await message.delete();
      message.channel.send({
        embeds: [
          {
            color: "000000",
            title: `Suggestion | Status : Pending`,
            description: `\n\`\`\`\n${message.content}\`\`\``,
            footer: {
              text: `${message.author.tag} | ${message.author.id}`,
              icon_url: message.author.displayAvatarURL({ dynamic: true }),
            },
            timestamps: new Date(),
          },
        ],
        components: [interactiveButtons],
      });
    }
  }
};
