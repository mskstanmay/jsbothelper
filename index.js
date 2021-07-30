const { Client } = require("discord.js");
require("dotenv").config();
const { GCommands } = require("gcommands");
const client = new Client({ partials: ["MESSAGE", "REACTION"] });

client.on("ready", () => {
  client.user.setActivity("Js Bot Official", { type: "WATCHING" });
  const gc = new GCommands(client, {
    cmdDir: "cmds/",
    cmdDir: "test/",
    eventDir: "evts/",
    language: "english",
    unkownCommandMessage: false,
    slash: {
      slash: "true",
    },
  });

  gc.on("debug", (debug) => console.log(debug));
  gc.on("log", (log) => console.log(log));

  console.log(client.user.tag);
});
client.login(process.env.token);
