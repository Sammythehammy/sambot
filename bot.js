const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTI5Njc5MDU5NDcxNDMzNzM4.Dw4pGA.VNeqUd73CFreX6N-5cT2mLRngrs);//BOT_TOKEN is the Client Secret
