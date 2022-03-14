const { sign } = require('crypto');
const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Le Fameux Text Bot est arrivé parmi nous!`);
});

client.on('message', msg => {

    const string = new String(msg);
    
    tab = ["eternium", "ping", "meme", 'no', 'pierre', 'penis'];

    let keyword = check_in_sentence(string.toLowerCase(), tab)
    
    if (keyword === 'ping')
        msg.reply('pong');
    else if (keyword === 'eternium')
        msg.reply('Work in progress');
    else if (keyword === 'meme')
        msg.reply('Work in progress');
    else if (keyword === 'penis')
        msg.reply('Get your mind out of the gutter PLEASE');
});


//To detect a word in a sentence
function check_in_sentence(str, tab)
{
    for (i = 0; i < tab.length; i++) {
        if (str.includes(tab[i]))
            return (tab[i]);
    }
    return (-1);
}