const Discord = require("discord.js")
module.exports.run =  async (client, message, args) => {
    const sayMessage = args.join("romantismo");
    message.channel.send(`Aqui vai o resumo do Movimento Litérario Romantismo: https://drive.google.com/file/d/1auSIzOF4VVql-2hnYSmk--UizmdIah0S/view?usp=sharing`)
} //link do arquivo no drive