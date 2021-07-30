const { Command } = require("gcommands");

module.exports = class Command_structure extends Command {
  constructor(...args) {
    super(...args, {
      name: "command_structure",
      description: "Gives The Basic Command Structue Of Our Series",
      guildOnly: "731206423878434877"
 
    });
  }

  async run({ respond }) {
     respond(`> **Given Below Is The Basic Structure Of Any Command File Made In The Series 👇**\n\`\`\`js\nconst Discord = require ('discord.js')\n\nmodule.exports.run = (bot,msg,args)=>{\n//Code\n}\n\nmodule.exports.help ={\nname: \"\"\n}\`\`\``);
    }
  };
  
