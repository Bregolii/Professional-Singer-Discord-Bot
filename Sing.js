// references
const auth = require('./auth.json')
var Discord = require('discord.js')
const DingDong = require('./Songs/Ding Dong.js')
const NeverGonnaDance = require('./Songs/NeverGonnaDance.js')
const Rasputin = require('./Songs/Rasputin.js')
const Sandstorm = require('./Songs/Sandstorm.js')
const Revenge = require('./Songs/Revenge.js')
const Default = require('./Songs/Default.js')
const NumberOne = require('./Songs/NumberOne.js')
const September = require('./Songs/September.js')
const FreshPrince = require('./Songs/Fresh Prince.js')
const YellowSub = require('./Songs/Yellow Submarine.js')


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Initialize Discord Bot
var bot = new Discord.Client();
bot.on('ready', (evt) => {
    console.log('Hello Judges');
    bot.user.setActivity("Sing Help")
});



bot.on('message',  message => {

    async function play(song, singer) {
        message.guild.me.setNickname(singer) //I would change avatar aswell but theres a anti spam feature
        await sleep(1500)
        for (var i = 0; i < song.lyrics.length; i++) {
            message.channel.send(song.lyrics[i], {
            tts: true
            })
            await sleep(1500)
        } 
        message.guild.me.setNickname("The Audience")
        await sleep(1500)
        message.channel.send("👏 Wow that was a beautiful voice 👏", {
            tts: true
        })
        message.guild.me.setNickname("Professional Singer")
    } 

    if(message.author.bot)
		return;
    if (message.content.toLowerCase().startsWith("sing ding dong") === true) {
        play(DingDong, "Günther")
    } else if (message.content.toLowerCase().startsWith("sing never gonna dance") === true) {
        play(NeverGonnaDance, "George")
    } else if (message.content.toLowerCase().startsWith("sing rasputin") === true) {
        play(Rasputin, "Boney")
    } else if (message.content.toLowerCase().startsWith("sing sandstorm") === true) {
        play(Sandstorm, "JS16")
    } else if (message.content.toLowerCase().startsWith("sing revenge") === true) {
        play(Revenge, "Captain Sparkles")
    } else if (message.content.toLowerCase().startsWith("sing default dance") === true) {
        play(Default, "Default")
    } else if (message.content.toLowerCase().startsWith("sing number one") === true) {
        play(NumberOne, "Robbie")
    } else if (message.content.toLowerCase().startsWith("sing september") === true) {
        play(September, "Maurice")
    } else if (message.content.toLowerCase().startsWith("sing fresh prince") === true) {
        play(FreshPrince, "Will")
    } else if (message.content.toLowerCase().startsWith("sing yellow submarine") === true) {
        play(YellowSub, "The Beatles")
    } else if (message.content.toLowerCase().startsWith("sing help") === true) {
        message.channel.send("Write Sing and then a song from the list below, \n\nExample: Sing Rasputin \n\nDing Dong \nNever Gonna Dance \nRasputin \nSandstorm \nRevenge \nDefault Dance \nNumber One \nSeptember \nFresh Prince \n Yellow Submarine")
    }
});



bot.login(auth.token);