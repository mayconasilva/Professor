const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
const sayMessage = args.join(" ")
    let arr = []
    let num = Number(sayMessage)
    let fim = 10
    let c = 1
    let x = 10
    while (c <= x) {
    let tab = num + 'x' + c + '=' + num*c
    arr.push(tab)
    c++
    }
    message.channel.send(arr)

}
