const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
let n = args.join(" ")
function fatorial (n) {
    if (n==1) {
        return 1
    } else {
        return n*fatorial(n-1)
    }
}

    message.channel.send(fatorial(n))
}