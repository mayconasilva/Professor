const Discord = require("discord.js")
module.exports.run = async(client, message, args) => {
const filter = m => !isNaN(m.content)
const collector = message.channel.createMessageCollector(filter, { time: 15000 }); // defindo o coletor
message.channel.send("Neste comando você irá calcular a distância através do calculo da função horária. Agora po favor, indique o valor da distância inicial") //Explicando o comando e pedindo o valor da distância inicial
let res = []
collector.on('collect', m => {
	    if (!res[0]) {
		res.push(Number(m.content))
		message.channel.send("Qual é o valor da velocidade") //pedindo o valor da velocidade
	}
	else if (!res[1]) {
		res.push(Number(m.content))
		message.channel.send("Qual é o valor do tempo")
    }
else if (!res[2]) {
        res.push(Number(m.content))
        let s = res[0] + res[1] * res[2]
        message.channel.send(s)
    }
	
}
)
}