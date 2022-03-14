const { sign } = require('crypto');
const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const client = new Discord.Client();
console.log(`Lauching Bot...`);

client.on('ready', () => {
    console.log('lauched')
});

client.on('message', msg => {

    const string = new String(msg);

    //word bank// add a word in the bank when you add a feature
    bank = ["eternium", "ping", "meme", 'pierre', 'meilleur serv',
            'bite',  'penis', 'vagin',
            '🙂', 'queen', 'nice', 'matis', 'mathis', "boy"];

    let keyword = check_in_sentence(string.toLowerCase(), bank)
    
    if (msg.author.username != 'GreetTextBot' && msg.channel.name == 'le-bot') {
        if (keyword === 'ping')
            msg.reply('pong');
        else if (keyword === 'eternium')
            msg.reply('Work in progress');
        else if (keyword === 'meme')
            msg.reply('Work in progress');
        else if (keyword === 'pierre')
            msg.reply('Who DARES to speak about his esteemed Ass?');
        else if (keyword === 'meilleur serv')
            msg.reply('MEILLEUR SERV');

        //curse words
        else if (keyword === 'bite' || keyword === 'penis' || keyword == 'vagin') {
            msg.reply('Get your mind out of the gutter PLEASE.');
            msg.delete();
        }

        //gifs reactions
        else if (keyword === 'queen')
            msg.channel.send('https://tenor.com/view/nia-xenoblade-chronicles2-nia-sawg-gif-18511161');
        else if (keyword === 'boy')
            msg.channel.send('https://tenor.com/view/kratos-boy-kratos-boy-boi-god-of-war-gif-12278930');
        else if (keyword === 'mathis' || keyword === 'matis')  
            msg.channel.send('https://tenor.com/view/anime-lucina-irritated-dance-peace-sign-gif-13933637');
        else if (keyword === 'nice')
            msg.channel.send('https://tenor.com/view/pootis-engage-yes-very-yes-heavy-tf2-gif-17755424');  
        else if (keyword === '🙂') {
            msg.channel.send('https://tenor.com/view/axolotl-smile-happy-cute-animal-smiling-gif-12642274');
            msg.delete();
        }
    }
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