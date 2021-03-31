module.exports={
    name: "per",
    description: "List member permissions",
    
    execute(message, args){
        
        const perms = ["ADMINISTRATOR","CREATE_INSTANT_INVITE","KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","PRIORITY_SPEAKER","STREAM","VIEW_CHANNEL","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","VIEW_GUILD_INSIGHTS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];
        var permsmess = [];
        


      
        let targetmember = message.mentions.members.first();
        
        if(args[1] != ""){

            if(!targetmember) return message.channel.send("Neplatná syntaxe: Chybí jméno člena!")
            
            if(args[1]=="all" || args[1] == undefined){ 
                permsmess += `Práva uživatele <@${targetmember.user.id}>:\n`
                for(const perm of perms){
                    if(message.guild.member(targetmember).hasPermission(perm)) {
                        permsmess += perm + " => :white_check_mark:\n" 
                    }
                    else{
                        permsmess += perm + " => :x:\n" 
                    }
                }
                message.channel.send(permsmess);
            }
            else{
                var upperArg = args[1].toUpperCase();
                if(!perms.indexOf(upperArg > -1)) return message.channel.send("Neplatné právo!");
                if(message.guild.member(targetmember).hasPermission(upperArg)) {
                    message.channel.send(`<@${targetmember.user.id}>` + "   " + upperArg + " => :white_check_mark:\n"); 
                }
                else{
                    message.channel.send(`<@${targetmember.user.id}>` + "   " + upperArg + " => :x:\n");
                }
            }
        }
        
       
        
        
    }
}   