const Discord = require("discord.js")
module.exports.run = async(client, message, args) => {
const filter = m => !isNaN(m.content)
const collector = message.channel.createMessageCollector(filter, { time: 15000 }); // defindo o coletor
message.channel.send("Neste comando você irá calcular a força resultante segundo a segunda lei de newton. Por favor, verique se valores são correspondentes. Qual é o valor da massa?") //Explicando o comando e pedindo o valor da masa
let res = []
collector.on('collect', m => {
	    if (!res[0]) {
		res.push(Number(m.content))
		message.channel.send("Qual é o valor da aceleração?") //pedindo o valor da aceleração
		console.log(res)
	}
	else if (!res[1]) {
		res.push(Number(m.content))
		let fr = res[0] * res [1]
		message.channel.send("A força resultante é equivalente a " + fr + ' Newtons') //dando o resultado
		console.log(res)
	}
	
}
)
}
