const Discord = require("discord.js")
module.exports.run = async (client, message, args ) => {
    const sayMessage = args.join("primeiroreinado")
    message.channel.send(`Aqui vai o resumo do Primeiro Reinado: https://drive.google.com/file/d/1eAmT0_HGu98LjxpBhq6qnwW1OYwpkWe-/view?usp=sharing`) //Link do arquivo no drive
}