const ms = require("ms");
module.exports = {
  slash: "both",
  testOnly: true,
  description: "Gives The Bot's Uptime",
  callback: ({ client }) => {
    return ms(client.uptime);
  },
};
