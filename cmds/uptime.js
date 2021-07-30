const { Command } = require("gcommands");

module.exports = class Uptime extends Command {
  constructor(...args) {
    super(...args, {
      name: "uptime",
      description: "Gives The Bot's Uptime",
      guildOnly: "731206423878434877"
 
    });
  }

  async run({client, respond }) {
    async function UptimeCal(ms) {
      let seconds  = ms / 1000,
        days = parseInt(seconds / 86400);
      seconds = seconds % 86400;
  
      let hours = parseInt(seconds / 3600);
      seconds = seconds % 3600;
  
      let minutes = parseInt(seconds / 60);
      seconds = parseInt(seconds % 60);
  
      if (days) {
        return `${days} day | ${hours} hours | ${minutes} minutes`;
      } else if (hours) {
        return `${hours} hours | ${minutes} minutes | ${seconds} seconds`;
      } else if (minutes) {
        return `${minutes} minutes | ${seconds} seconds`;
      }
  
      return `${seconds} second(s)`;
    } 
    const upt = await UptimeCal(client.uptime)
     respond(upt);
    }
  };
  
