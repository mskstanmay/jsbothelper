const DiscordJS = require("discord.js");
const WOKCommands = require("wokcommands");
require("dotenv").config();
const { MessageEmbed } = require("discord.js");
const client = new DiscordJS.Client({ partials: ['MESSAGE', 'REACTION']});

client.on("ready", () => {
  
 client.user.setActivity('Js Bot Official', { type: 'WATCHING' })

  console.log(client.user.tag)
  new WOKCommands(client, {
    commandsDir: "commands",
    featuresDir:"events",
    testServers: ["731206423878434877","793077174122315797"],
    showWarns: false,
    ignoreBots:true,
    disabledDefaultCommands: [
       'help',
      'command',
       'language',
       'prefix',
       'requiredrole'
  ],
  }).setBotOwner(["685101975385276469"])
  .setDefaultPrefix('/')
  .setColor(0x32ddff)
});
client.login(process.env.token);
client.on("message",async(message)=>{
 if(message.content.includes("845288525791363142") && message.content.length <= 22){
  return message.reply({embed:{color:"#32ddff",description:`I Only respond to slash cmds.`}})
}
})

client.on("guildMemberAdd", async(member) => {
  if (member.guild.id != "731206423878434877") return;

  member.roles.add("768160074735812618");

  const channel = member.guild.channels.cache.get("792089717415870513");
  if (!channel) return;

  const welcome = new MessageEmbed()
  .setColor("#32ddff")
 .setImage("https://cdn.discordapp.com/attachments/793859659400347648/817081661287956480/standard.gif")
  .setTitle(
    `Welcome to ${member.guild.name}`
  )
    .setDescription(`Welcome ${member}, before exploring the rest of the server we would like you to read our rules and you must comply with them at all times ! Don't forget to take ur self-roles to get pings on updates in the server .
**Checkout Some Channels :-**

> **Server Rules : <#753103524862230579> | Follow Them At All Times.**
> **Self Roles : <#804533446226870312> | Get Pings On Imp. Updates.** 
> **Help Channel : <#779316106435231754> | Ask your doubts here.**
  
Once done, you may proceed to chill in the <#753103480968708137> or directly go to <#779316106435231754> if you're here to get help regarding that bug you're facing that just doesn't want to get fixed <:isee:851068391238533130>`);
  // Send the welcome message
  channel.send(member, { embed: welcome});
});

// const Topgg = require("@top-gg/sdk")
// const express = require("express")


// const app = express()

//  const webhook = new Topgg.Webhook("your webhook auth")

// app.post("/dblwebhook", webhook.listener(vote => {
//    // vote will be your vote object, e.g
//    console.log(vote.user) // 395526710101278721 < user who voted\

//    // You can also throw an error to the listener callback in order to resend the webhook after a few seconds
//  }))

//  app.listen(3000)


module.exports = client;
