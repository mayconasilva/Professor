const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let option = args.join(" ")
    if (option == "his") {
        const historia = require("./flashcard/historia.json")
        const item = historia[Math.floor(Math.random() * historia.length)]
        const embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(item.Nome)
        .addField("**Período Histórco", item.periodohistorico)
        .addField('**Localidade**',  item.localidade)
        .setImage(item.IMG)
        .setDescription(item.resumo)
        .setFooter(`2020 © ${client.user.username}.`)
        message.channel.send(embed)
    }
}