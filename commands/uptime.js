const ms = require("ms");
module.exports = {
  slash: "both",
  testOnly: true,
  description: "Gives The Bot Ws Ping",
  callback: ({ client }) => {
    return ms(client.uptime);
  },
};
