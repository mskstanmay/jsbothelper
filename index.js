const DiscordJS = require("discord.js");
const WOKCommands = require("wokcommands");
require("dotenv").config();

const client = new DiscordJS.Client();

client.on("ready", () => {
  
 client.user.setActivity('Js Bot Official', { type: 'WATCHING' })

  console.log(client.user.tag)
  new WOKCommands(client, {
    commandsDir: "commands",
    testServers: ["731206423878434877","793077174122315797"],
    showWarns: false,
    ignoreBots:true,
  }).setBotOwner(["685101975385276469"])
});
client.login(process.env.token);
module.exports = client;
