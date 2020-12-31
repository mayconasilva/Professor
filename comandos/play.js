const Discord = require("discord.js")
const apikey = require("../apikey.json")
const Youtube = require("simple-youtube-api")
const yt = new Youtube(apikey.apikey)
const fs = require("fs")
const moment = require("moment")
const prism = require("prism-media")
const Ytdl = require('ytdl-core')
const { Video } = require("simple-youtube-api")
module.exports.run = async (client, message, args) => {
    let EstouPronto = false
    if (message.member.voice.channel) {
        connection = await message.member.voice.channel.join()
        EstouPronto = true
        if (EstouPronto) {
            let music = args.join (" ")
            if (Ytdl.validateURL(music)) {
                connection.play(Ytdl(music))
                EstouPronto = false
            } else {
                let musica = await yt.searchVideos(music, 5)
                let OqueTocar = await Ytdl.getVideoID(musica[0].id)
                connection.play(Ytdl(OqueTocar))
                EstouPronto = false

                if (!EstouPronto) {
                    
                }

            }
        }
    }  else {
        message.channel.send("Por favor, entre em um canal de voz!")
    }
   
}
    
