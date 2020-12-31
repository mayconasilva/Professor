//Simulado de Físics
const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
    const quiz = require('./simulados/simfis.json');
    function test () {
    const item = quiz[Math.floor(Math.random() * quiz.length)] ;
    return item

    }
    let res = []
    let ans = []
    const filter = () => true
    message.channel.send("Orientações Gerais: 1- São 10 questões no total; 2- As respostas das questões serão conferidas no final; 3- Evite pegar respostas da internet, utilize do seu próprio conhecimento;4- Assis que estiver pronto digite o.k. ou qualquer coisa(Irá aparecer no seu gabarito) para continuar ")
    const collector = message.channel.createMessageCollector(m => {
        return m.author.id === message.author.id });
       
    
    collector.on('collect', m => {
        const item = test()
    if (res.length == 0 ) {
            message.channel.send(item.question)
            res.push(m.content)
            ans.push ( item.answers)
            
            
        }
        else if (res.length < 3) {
            const item = test()
            message.channel.send(item.question)
            res.push(m.content) 
            ans.push ( item.answers)
            
        } 
        else if (res.length < 4) {
            message.channel.send(item.question)
            res.push(m.content)
            ans.push ( item.answers)
            
        } 
        else if (res.length < 5) {
            message.channel.send(item.question)
            res.push(m.content)
            ans.push ( item.answers)
        }
        else if (res.length < 6) {
            message.channel.send(item.question)
            res.push(m.content)
            ans.push ( item.answers)
        }
        else if (res.length < 7) {
            message.channel.send(item.question)
            res.push(m.content)
            ans.push ( item.answers)
        }
        else if (res.length < 8) {
            message.channel.send(item.question)
            res.push(m.content)
            ans.push ( item.answers)
        }
        else if (res.length < 9) {

            message.channel.send(item.question)
            res.push(m.content)
            ans.push ( item.answers)
            
        }
        else if (res.length < 10) {
            message.channel.send(item.question)
            res.push(m.content) 
            ans.push ( item.answers)
            let questoes = res.length
            message.channel.send(`Meus parabéns, você terminou o simulado de Física`)
            message.channel.send("Confira o gabarito:")
            let embed = new Discord.MessageEmbed()
            .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
            .setAuthor('🤖 Gabarito')
            .addField('**Suas Respostas**', res)
            .addField('**Respostas das Questões**', ans)
            .setFooter(`2020 © ${client.user.username}.`)
            message.channel.send(embed)
        }
          
            

        
    })
    
}
