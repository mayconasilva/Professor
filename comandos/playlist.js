const Discord = require("discord.js")
const apikey = require("../apikey.json")
const Youtube = require("simple-youtube-api")
const yt = new Youtube(apikey.apikey)
const fs = require("fs")
const moment = require("moment")
const prism = require("prism-media")
const Ytdl = require("ytdl-core")
const {Video} = require("simple-youtube-api")
const {Util} = require("discord.js")
module.exports.run = async (client, message, args) => {
    let music = args.join(" ")
    if (client.player.isPlaying(message.guild.id)) {
    
    }
}