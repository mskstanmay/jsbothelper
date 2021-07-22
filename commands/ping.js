module.exports = {
  slash: 'both',
  testOnly: true,
  description: 'Gives The Bot Ws Ping',
  callback: ({ message, args ,client}) => {
    return `${client.ws.ping}ms`
  },
}