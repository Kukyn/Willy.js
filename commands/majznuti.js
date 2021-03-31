module.exports={
    name: "majznuti",
    description: "majznuti",
    execute(message, args){
        
        const author = message.author;
        const targetmember = message.mentions.members.first();
        const nastroj = args[1];
        message.delete();
        if(!targetmember || !nastroj) return message.channel.send("Neplatná syntaxe: Chybí jméno člena nebo nástroj!");
        
        message.channel.send(`${author} majznul ${targetmember} pomocí ${nastroj}`);
    }
}