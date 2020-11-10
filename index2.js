// //Required dependencies which were removed from pacckage.json

// /*
//  "ffmpeg-binaries": "^4.0.0",
//     "ms": "^2.1.2",
//     "opusscript": "0.0.7",
//     "simple-youtube-api": "^5.2.1",
//     "ytdl-core": "^3.2.2"
// */ 

// //The bot is currently not in working stage..!

// const Discord = require('discord.js');
// const ytdl = require('ytdl-core');

// const bot = new Discord.Client();

// const queue = new Map();

// const token = process.env.sound //require token for discord 


// bot.on('ready', () => {
//     console.log('Music Bot is online');
// })

// bot.on('message' ,(message)=> {
//     switch(message){
//         case '!command':
//             message.channel.send('Here are the list of following command ')
//     }
// });

// bot.on('message' ,async (message)=>{

//     if(message.author.bot)          //to check whether message is not sent by bot..........
//     {
//         return;
//     }
//     let args = message.content.substring(1).split(' ');
//     const serverQueue = queue.get(message.guild.id) //message,guild.id ->  server id4

//     switch(args[0]){
//         case 'p':
//             const voiceChannel = message.member.voice.channel; //voiceChannel -> returns a object conating the voice channel in which the message author is present
//             if(!voiceChannel)
//             {
//                 message.reply('please join voice channel')
//                 return
//             }
//             const songInfo =  await ytdl.getInfo(args[1])  
//             const song = {
//                 title: songInfo.videoDetails.title,
//                 url: songInfo.videoDetails.video_url
//             }
//             if(!serverQueue) {              //Creating object to be valued for the key(key is the id of my server)
//                 const queueConstruct = {
//                     textChannel: message.channel,
//                     voiceChannel: voiceChannel,
//                     connection: null,
//                     songs: [],
//                     volume: 5,
//                     playing: true
//                 }
            
//             queue.set(message.guild.id,queueConstruct)      //Mapping key value pair

//             queueConstruct.songs.push(song )        //adding song to array of songs 
//             try {
//                 var connection = await voiceChannel.join()  //connection === promise
//                 queueConstruct.connection = connection
//                 play(message.guild, queueConstruct.songs[0])
//             } catch (err){
//                 console.log(`there was a error connecting to this channel ${err}`)
//                 queue.delete(message.guild.id)
//                 message.channel.send('Connection error');
//             }
//          }
//           else{
//             serverQueue.songs.push(song)
//             return message.channel.send(`**${song.title} has been added to queue`);
//            }
//            break;
//         case 's' :
//             if(!serverQueue)
//             return (
//                 message.channel.send(`nothing in queue`)
//             )
//             serverQueue = []
//             serverQueue.connection.dispatcher.end()
//             message.channel.send('Stopped ')


//             return undefined;
//         case 'np' :
//             const voiceChannel1 = message.member.voice.channel; //voiceChannel -> returns a object conating the voice channel in which the message author is present
//             if(!voiceChannel1)
//             {
//                 message.reply('please join voice channel')
//                 return
//             }
//             if(!serverQueue)
//             {
//                 message.channel.send('Nothing is playing');
//                 return
//             }
//             message.channel.send(`
//             __**Currently Playing**__
//             ${serveQueue.songs[0].title} `);
//             return undefined;
//         case 'q': 
//              const voiceChannel2 = message.member.voice.channel; //voiceChannel -> returns a object conating the voice channel in which the message author is present
//             if(!voiceChannel2)
//             {
//             message.reply('please join voice channel')
//             return
//             }
//             if(!serverQueue){
//                 message.channel.send('Nothing in the queue');
//                 return
//             }
//             message.channel.send(`
//             __**Songs-Queue:**__
//             ${serverQueue.songs.map(song => `**-**${song.title}`).join('\n')}`)
            
//         }
//     }
// )

// function play(guild, song){
//     const serverQueue = queue.get(guild.id)

    
//     if(!song)       //reccursion base case 
//     {
//         serverQueue.voiceChannel.leave()
//         queue.delete(guild.id)
//         return undefined
//     }
//     const dispatcher = serverQueue.connection.play(song.url)
//     .on( 'finish',() =>{
//         serverQueue.songs.shift()
//         play(guild , serverQueue.songs[0])
//     })
//     .on('error',error =>{
//         console.log(error)
//     })
//     dispatcher.setVolumeLogarithmic( serverQueue.volume / 5)
// }

// bot.login(token);

