const Discord = require("discord.js");
require("dotenv").config();
const bot = new Discord.Client();
const prefix = "?";
const fs = require("fs");
const memberCounter = require("./counters/member_counter");
bot.commands = new Discord.Collection();
const commandsJS = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandsJS){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on("ready", ()=>{
    memberCounter(bot);
});

 bot.on("message", message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){
        case "ahoj":
            bot.commands.get("ahoj").execute(message, args);
            break;
        case "per":
            bot.commands.get("per").execute(message, args);
            break;
        case "majznout":
            
            bot.commands.get("majznuti").execute(message, args);
            break;
    }
 });


 
 


bot.login();
