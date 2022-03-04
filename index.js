const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Le Fameux Text Bot est arrivé parmi nous!`);
});

client.on('message', msg => {
    tab = ["bite", "eternium", "ping"];

    let keyword = check_in_sentence(msg, tab)
    if (keyword === 'ping') {
        msg.reply('pong');
    }
    else if (keyword === 'bite')
        msg.reply('vagin');
    
    else if (keyword === 'eternium')
        msg.reply('Va check toi même je sais pas faire ça');
});


//To detect a word in a sentence
function check_in_sentence(str, tab)
{
    for (i = 0; i < tab.length; i++) {
        if (str.content.includes(tab[i]))
            return (tab[i]);
    }
    return (-1);
}