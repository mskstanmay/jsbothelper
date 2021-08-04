const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { Command, ArgumentType } = require("gcommands");

module.exports = class Docs extends Command {
  constructor(...args) {
    super(...args, {
      name: "docs",
      description: "Fetches Stuff The Discord.js Documentation.",
      guildOnly: "731206423878434877",
      args: [
        {
          name: "query",
          type: ArgumentType.STRING,
          description: "The Thing You Want To Fetch From Docs", // only for slash
          required: true, // only slash
        },
        {
          name: "branch",
          type: ArgumentType.STRING,
          description: "The Branch Of Docs", // only for slash
          required: false, // only slash
        },
      ],
    });
  }

  async run({ client, respond, args }) {
    if (args[0].toLowerCase() != "master" && args[0].toLowerCase() != "stable")
      return respond({
        content: "Please Choose Stable/Master Branch",
        ephemeral: true,
        inlineReply: true,
      });
    const res = await (
      await fetch(
        `https://djsdocs.sorta.moe/v2/embed?src=${
          args[0]
        }&q=${encodeURIComponent(args[0])}`
      )
    ).json();
    if (!res) return respond({ content: "Nothing found.", ephemeral: true });
    const embed = new MessageEmbed();
    if (res.title) embed.setTitle(res.title);
    if (res.color) embed.setColor(res.color);
    if (res.author)
      embed.setAuthor(res.author.name, res.author.icon_url, res.author.url);
    if (res.fields) embed.addFields(res.fields);
    if (res.description) embed.setDescription(res.description);
    respond(embed);
  }
};
