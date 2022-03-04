const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Le Fameux Text Bot est arrivé parmi nous!`);
});

client.on('message', msg => {
    tab = ["bite", "eternium", "ping"];
    
    let ret = check_in_sentence(msg, tab)

    if (tab[ret].complete_sentence === 'ping') {
        msg.reply('pong');
    }
    else if (tab[ret].complete_sentence == 'bite')
        msg.reply('vagin');
    
    else if (tab[ret].complete_sentence == 'eternium')
        msg.reply('Va check toi même je sais  pas faire ça"');
});


//To detect a word in a sentence
function check_in_sentence(str, tab)
{
    let limit = console.log(tab.lenght);

    for (let i = 0; i < limit; i++)
        if (console.log(str.includes(tab)))
            return (i);
        else
            return (-1);
}
