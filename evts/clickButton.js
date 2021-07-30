const { MessageEmbed } = require("discord.js");
const e = require("express");
const { Event } = require("gcommands");
const { MessageButton, MessageActionRow } = require("gcommands");
module.exports = class Cbutton extends Event {
  constructor(...args) {
    super(...args, {
      name: "clickButton",
      once: false,
      ws: false,
    });
  }

  async run(client, button) {
    let suggestionsystem_buttons = [
      "suggestion_accept",
      "suggestion_deny",
      "suggestion_delete",
    ];
    if (suggestionsystem_buttons.includes(button.id)) {
      const acceptBTN = new MessageButton()
        .setLabel("APPROVE")
        .setStyle("green")
        .setDisabled()
        .setID("suggestion_accept");
      const denyBTN = new MessageButton()
        .setLabel("DISSAPROVE")
        .setStyle("red")
        .setDisabled()
        .setID("suggestion_deny");
      const delBTN = new MessageButton()
        .setLabel("DISCARD")
        .setStyle("grey")
        .setDisabled()
        .setID("suggestion_delete");

      const interactiveButtons = new MessageActionRow().addComponents([
        acceptBTN,
        denyBTN,
        delBTN,
      ]);
      if (button.id == "suggestion_accept") {
        let originembed = button.message.embeds[0];
        const embed = new MessageEmbed()
          .setDescription(
            originembed.description +
              `\n***The Dev's Are working on it and will be added to the bot soon.***`
          )
          .setTitle(`Suggestion | Status : Approved`)
          .setColor("#ffffff")
          .setFooter(
            button.message.embeds[0].footer.text,
            button.message.embeds[0].footer.iconURL
          )
          .setTimestamp(originembed.timestamp);
        button.message.edit({
          autoDefer: true, // if false use button.defer()
          embeds: [embed],
          components: [interactiveButtons],
        });
        button.defer();
      }
      if (button.id == "suggestion_deny") {
        let originembed = button.message.embeds[0];
        const embed = new MessageEmbed()
          .setDescription(
            originembed.description +
              `\n ***The Dev's don't think it's such a good feature.***`
          )
          .setTitle(`Suggestion | Status : DisApproved`)
          //        .setColor('#ff0000')
          .setFooter(
            button.message.embeds[0].footer.text,
            button.message.embeds[0].footer.iconURL
          )
          .setTimestamp(originembed.timestamp);
        button.message.edit({
          autoDefer: true, // if false use button.defer()
          embeds: [embed],
          components: [interactiveButtons],
        });
        button.defer();
      }
      if (button.id == "suggestion_delete") {
        button.message.delete();
      }
    }
  }
};
