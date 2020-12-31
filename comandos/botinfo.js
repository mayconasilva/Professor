const Discord = require('discord.js')


module.exports.run = async (client, message, args) => {
  const botAvatar = client.user.displayAvatarURL
  const date = client.user.createdAt
  const userName = client.user.username
  const servsize = client.guilds.size
  const usersize = client.users.size
  const inline = true
  const status = {
    online: '`🟢` Online',
    offline: '`⚫` Offline'
  }
  const embed = new Discord.MessageEmbed()
      .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
      .setThumbnail(botAvatar)
      .setAuthor('🤖 Minhas informações')
      .addField('**Meu nick**', userName)
      .addField('**Meu ID**', client.user.id)
      .addField('**Servidores**', 'Mais Educação')
      .addField('**Usuários**', 'Indisponível')
      .addField('**Criado em**', '27/10/2020')
      .setFooter(`2020 © ${client.user.username}.`)
      .setTimestamp()
       
    if (client.user.presence.status) {
      embed.addField(
        '**Status**',
        `${status[client.user.presence.status]}`,
        inline,
        true
      )
    }

    message.channel.send(embed)
  }

  
