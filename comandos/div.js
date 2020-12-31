const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ")
    let arr = []
    let num = Number(sayMessage) //informação pega do usuário
    let c = 1 //informação a ser alterada pelo c++
    let x = 10
    while (c <= x) {
        let res = num / c
        let tab = num + '/' + c + '=' + res
        arr.push(tab) //array
        c++
        
    }
    const embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('**Tabuada da Divisão**')
    .addField(arr)
    .setFooter(`2020 © ${client.user.username}.`)
message.channel.send(embed)

}