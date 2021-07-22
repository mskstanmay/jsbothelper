module.exports = {
  slash: "both",
  testOnly: true,
  description: "Gives The Basic Command Structue Of Our Series",
  callback: ({  args }) => {
    console.log(args);
    return `> **Given Below Is The Basic Structure Of Any Command File Made In The Series 👇**\n\`\`\`js\nconst Discord = require ('discord.js')\n\nmodule.exports.run = (bot,msg,args)=>{\n//Code\n}\n\nmodule.exports.help ={\nname: \"\"\n}\`\`\``;
  },
};
