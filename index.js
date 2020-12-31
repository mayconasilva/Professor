const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");

client.on("ready", () => {
    console.log('Vinde Espiríto Santo. Enchei os corações dos vossos fieís e acendei neles o fogo do vosso amor, enviai-nos o vosso espiríto e tudo sera criado, e renovareis a face da terra. Oremos, ó deus que intruístes os coraões dos vossos fiéis com luz do espiroto santo. Fazei com que apreciamos do mesmo espiríto e gozemos de sua consolação, por crito nosso senhor. Amém.')
    console.log(`A aula começou!`)
    
    client.user.setPresence({ game: { name: 'comando', type: 1, url: ''} });
    const atividade = require("./activity/materias.json")
    const materias = atividade[Math.floor(Math.random() * atividade.length)] ;
    
   
    client.user.setActivity(`Estudando ${materias.item}`)
    client.player = new Player(client)
    
    
})
client.on("message", async message => {
    if(message.author.bot) return; //ignorar mensagem de bots
    if(message.channel.type === "dm") return; //ignorar mensagem de dm
    if(!message.content.startsWith(config.prefix)) return; //ignorar mensagem que não sejam iniciadas pelo prefixo 'p!'
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    try {
      const comandoFile = require(`./comandos/${comando}.js`);
      return comandoFile.run(client, message, args);

    } catch (err) {console.error("Erro" + err)
  message.channel.send("Ops, Não tenho esse comando. Tem certeza que era isso que você queria?")} //comadno handler
})
client.off("ready", () => {
  console.log('A aula terminou')
})
client.login(config.token)