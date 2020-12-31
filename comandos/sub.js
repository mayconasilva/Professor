const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ") //informação pega do usuário
    let arr = []
    let num = Number(sayMessage)
    let c = 1 //informação a ser dada
    let x = 10 //limite
    while (c <= x) {
        let res = num - c
        let tab = num + '-' + c + '=' + res
        arr.push(tab) //array
        c++
        
    }
    const embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('**Tabuada da Subtração**')
    .addField(arr)
    .setFooter(`2020 © ${client.user.username}.`)
message.channel.send(embed)

}