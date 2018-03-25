const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (!message.author.bot){
        content = message.content.toLowerCase()
        
        if (content === 'hello there') {
    	message.reply('General Kenobi!');
        }   else if (content.includes('anime')) {
            if (!content.equals("anime") && !content.equals("Anime is trash")){
                message.reply('Anime is trash. Get help.');
                message.delete();
            } else if (message.author.username.equals("a")) {
                message.reply('Anime is trash. Get help.');
            }
                
            
        }   else if (content.equals("username")) {
            message.reply(message.author.username);
        }
        
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
