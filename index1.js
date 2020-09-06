const Discord = require('discord.js');
const bot = new Discord.Client();
  
const token = process.env.flame;   
 
bot.on('ready', () => {
    console.log('This bot is active!');
})
 
bot.on('message',message => {
    if(message.content === '!command')
    {
        message.channel.send(`Below are the list of following command...type the following commands to see what bot can do!!! 
        Hello
        Plan a (@username)
        Aao`
)

    }
})
bot.on('message', message => {
    if(message.author.bot === true)
    {
        return 
    }
  lets args = message.content.split(' ')
    if(args[0] === 'Hello')
         message.channel.send(`Hello ${message.author}..How are you!!!`)
         
        if(args[0] === 'Aao')
         {
             message.channel.send('Its pubg time baby!!!')
            var arr1  = message.guild.members.cache;  //return the all the members in a guild
            arr1.forEach(e => {
                if((e.user === message.author)||(e.user.bot === true))
                {

                }   
                else
                {
                    message.channel.send(`Aaoo ${e.user} online ........`)
                }
            })

         }
         if(message.content.includes('galti'))
         {
             message.channel.send(`Aaare Vo pubg ki Galti hai ${message.author}!!!!`)
         }
 
    if(args[0] === 'Plan a')
    {
            var arr  = message.guild.members.cache;  //return the all the members in a guild
            var person=arr.find(e => e.user.username==='args[1]')
            
            if(!person) return  message.reply("I CANT FIND THE USER ")
            
            let mainrole = message.guild.roles.cache.find(role => role.name === "Jarvis");
            let role = message.guild.roles.cache.find(role => role.name === "Deeksha");
        
            if(!role) return message.reply("Couldn't find the mute role.")

            person.roles.remove(mainrole);
            person.roles.add(role);
            
            message.channel.send('${args[1] has been mutted for 10 minutes}')
 
            setTimeout(function(){
               
                person.roles.add(mainrole)
                person.roles.remove(role);
                message.channel.send(`@${args[1]} has been unmuted.`)
            }, 600);

    }
 
 

});
bot.login(token);


