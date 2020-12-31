const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
const sayMessage = args.join(" ")
    let arr = []
    let num = Number(sayMessage) //informação pega do usuário
    let c = 1 //informação a ser alterada
    let x = 10
    while (c <= x) {
    let tab = num + 'x' + c + '=' + num*c
    arr.push(tab) //array
    c++
    }
    const embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('**Tabuada da Multiplicação**')
    .addField(arr)
    .setFooter(`2020 © ${client.user.username}.`)
message.channel.send(embed)
}
