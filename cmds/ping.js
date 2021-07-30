const { Command } = require("gcommands");

module.exports = class Ping extends Command {
  constructor(...args) {
    super(...args, {
      name: "ping",
      description: "Gives The Bot Ws Ping",
      guildOnly: "731206423878434877"
 
    });
  }

  async run({ respond }) {
    respond(`${client.ws.ping}ms`);
  }
};
