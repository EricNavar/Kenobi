const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (!message.author.bot){
        content = message.content.toLowerCase()
        
        if (message.content.toLowerCase() === 'hello there') {
    	message.reply('General Kenobi!');
        }   else if (content.includes('anime')) {
            message.reply('Anime is trash. Get help.');
            message.delete();
        }   
        
        
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
