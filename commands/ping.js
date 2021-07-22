module.exports = {
  slash: 'both',
  testOnly: true,
  description: 'Gives The Bot Ws Ping',
  callback: ({ client}) => {
    return `${client.ws.ping}ms`
  },
}