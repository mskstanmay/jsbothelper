module.exports = {
    slash: 'both',
    testOnly: true,
    description: 'Gives The Basic Structue Of Mongoose Connection',
    callback: ({}) => {
      return `> **Given Below Is The Basic Structure Of A Mongoose Connection 👇**\n\`\`\`js\nconst {connect} = require ('mongoose')\n\nconnect(\`mongodb+srv://USER:PASSWORD@SERVERNAME.mslba.mongodb.net/main\`,{\nuseNewUrlParser:true,\nuseUnifiedTopology:true,\nuseFindAndModify: false\n})\nreturn mongoose}\`\`\``
    },
  }
