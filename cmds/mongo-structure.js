  const { Command } = require("gcommands");

  module.exports = class Mongo_structure extends Command {
    constructor(...args) {
      super(...args, {
        name: "mongo_structure",
        description: "Gives The Basic Structue Of Mongoose Connection.",
        guildOnly: "731206423878434877"
 
      });
    }
  
    async run({ respond }) {
       respond(`> **Given Below Is The Basic Structure Of A Mongoose Connection 👇**\n\`\`\`js\nconst {connect} = require ('mongoose')\n\nconnect(\`mongodb+srv://USER:PASSWORD@SERVERNAME.mslba.mongodb.net/main\`,{\nuseNewUrlParser:true,\nuseUnifiedTopology:true,\nuseFindAndModify: false\n})\nreturn mongoose\`\`\``);
      }
    };
    
  