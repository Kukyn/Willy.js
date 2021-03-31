module.exports= async(bot)=>{
    const guild = bot.guilds.cache.get("440506504853061633");
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get("826543299866656768");
        channel.setName(`Počet uživatelů: ${memberCount}`);
    },100000);
}

