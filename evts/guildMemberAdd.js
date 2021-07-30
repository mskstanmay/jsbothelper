const { Event } = require("gcommands");
const { MessageEmbed } = require("discord.js");
module.exports = class GmemberAdd extends Event {
  constructor(...args) {
    super(...args, {
      name: "guildMemberAdd",
      once: false,
      ws: false,
    });
  }

  async run(client, member) {
    if (member.guild.id != "731206423878434877") return;

    await member.roles.add("768160074735812618");
    const channel = member.guild.channels.cache.get("792089717415870513");
    if (!channel) return;
    const welcome = new MessageEmbed()
      .setColor("#32ddff")
      .setImage(
        "https://cdn.discordapp.com/attachments/793859659400347648/817081661287956480/standard.gif"
      )
      .setTitle(`Welcome to ${member.guild.name}`)
      .setDescription(`Welcome ${member}, before exploring the rest of the server we would like you to read our rules and you must comply with them at all times ! Don't forget to take ur self-roles to get pings on updates in the server .
**Checkout Some Channels :-**

> **Server Rules : <#753103524862230579> | Follow Them At All Times.**
> **Self Roles : <#804533446226870312> | Get Pings On Imp. Updates.** 
> **Help Channel : <#779316106435231754> | Ask your doubts here.**

Once done, you may proceed to chill in the <#753103480968708137> or directly go to <#779316106435231754> if you're here to get help regarding that bug you're facing that just doesn't want to get fixed <:isee:851068391238533130>`);
    // Send the welcome message
    channel.send(member, { embed: welcome });
  }
};
