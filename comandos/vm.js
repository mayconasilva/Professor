const Discord = require("discord.js")
module.exports.run = async (client,message,args) => {
    const filter = m => !isNaN(m.content)
    const collector = message.channel.createMessageCollector(filter, {time:15000});
    message.channel.send("Neste comando você irá calcular a velocidade média usando a fórmula vm=(sf-so/(tf-t0). Qual o valor da varição da distância?")
    let res = []
    collector.on('collect',m => {
        if(!res[0]) {
            res.push(Number(m.content))
            message.channel.send("Qual o valor da varição do tempo?")
            console.log(res)

        }
        else if (!res[1]) {
            res.push(Number(m.content))
            let vm = res[0] / res [1]
            message.channel.send("A velocidade média é equivalente a " + vm + "m/s ou km/h")
        }

    }
    )
}