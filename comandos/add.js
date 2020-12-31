const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ")
    let arr = []
    let num = Number(sayMessage) //informação pega do usuário
    let c = 1 //informação a ser mudada pelo c++
    let x = 10 //limite definido
    while (c <= x) {
        let res = num + c //operação
        let tab = num + '+' + c + '=' + res
        arr.push(tab) //adicionando informação ao array
        c++
        
    }
    const embed = new Discord.MessageEmbed()
    .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
    .setTitle('**Tabuada da Adição**')
    .addField(arr)
    .setFooter(`2020 © ${client.user.username}.`)
message.channel.send(embed)

}
