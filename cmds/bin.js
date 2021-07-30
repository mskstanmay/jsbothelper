const { Command } = require("gcommands");

module.exports = class Bin extends Command {
  constructor(...args) {
    super(...args, {
      name: "bin",
      description: "Gives Some Bins To Share Code.",
      guildOnly: "731206423878434877"
 
    });
  }

  async run({ respond }) {
     respond("Bins are a very useful way of sharing code and are used to share long blocks of code and errors easily so try using them and avoid using code blocks whenver possible.\nHere are Some Bins You may use to share code !!\n\nPastebin : https://pastebin.com/\nHastebin : https://hastebin.com/\nSourcebin : https://sourceb.in/");
  }
};
