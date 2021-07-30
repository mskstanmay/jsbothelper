const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { Command } = require("gcommands");

module.exports = class Docs extends Command {
  constructor(...args) {
    super(...args, {
      name: "docs",
      description: "Fetches Stuff The Discord.js Documentation.",
      guildOnly: "731206423878434877"
 
    });
  }

  async run({ client, respond, args }) {
    const [query] = args;
    let branch;
    if (query === "master") branch = "master";
    if (query === "stable") branch = "stable";
    else branch = "stable";
    const res = await (
      await fetch(
        `https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(
          args[0]
        )}`
      )
    ).json();
    if (!res) return "Nothing found!";
    const embed = new MessageEmbed();
    if (res.title) embed.setTitle(res.title).setColor(res.color);
    if (res.author)
      embed.setAuthor(res.author.name, res.author.icon_url, res.author.url);
    if (res.fields) embed.addFields(res.fields);
    if (res.description) embed.setDescription(res.description);
    respond(embed);
  }
};
