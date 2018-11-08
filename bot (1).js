const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`@- Riverrr ?#1111 `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

var prefix = "-"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "باند") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

 var prefix = "-"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "كيك") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
 
 client.on('message', msg => {
	if (msg.author.bot) return;
	if (!msg.content.startsWith(prefix)) return;
	let command = msg.content.split(" ")[0];
	command = command.slice(prefix.length);
	let args = msg.content.split(" ").slice(1);
   
	  if(command === "مسح") {
		  const emoji = client.emojis.find("name", "wastebasket")
	  let textxt = args.slice(0).join("");
	  if(msg.member.hasPermission("MANAGE_MESSAGES")) {
	  if (textxt == "") {
		  msg.delete().then
	  msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
  } else {
	  msg.delete().then
	  msg.delete().then
	  msg.channel.bulkDelete(textxt);
		  msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
		  }    
	  }
  }
  });
 
   client.on('message', message => {
 
	    if (message.content === "-mutechannel") {
	                        if(!message.channel.guild) return message.reply(' This command only for servers');
	 
	if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
	           message.channel.overwritePermissions(message.guild.id, {
	         SEND_MESSAGES: false
	 
	           }).then(() => {
	               message.reply("تم تقفيل الشات :white_check_mark: ")
	           });
	             }
	//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
	if (message.content === "-unmutechannel") {
	    if(!message.channel.guild) return message.reply(' This command only for servers');
	 
	if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
	           message.channel.overwritePermissions(message.guild.id, {
	         SEND_MESSAGES: true
	 
	           }).then(() => {
	               message.reply("تم فتح الشات:white_check_mark:")
	           });
	             }
	 
	 
	 
});
 
client.on('message', message => {
	    if (message.content.startsWith("رابط")) {
	 
	  message.channel.createInvite({
	        thing: true,
	        maxUses: 3,
	        maxAge: 86400
	    }).then(invite =>
	      message.author.sendMessage(invite.url)
	    )
	    const embed = new Discord.RichEmbed()
	        .setColor("RANDOM")
	        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
	      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
	              const Embed11 = new Discord.RichEmbed()
	        .setColor("RANDOM")
	                .setAuthor(message.guild.name, message.guild.iconURL)
	        .setDescription(`
	**
	---------------------
	-[${message.guild.name}]  هذا هو رابط سيرفر
	---------------------
	-هذا الرابط صالح ل3 مستخدم فقط
	---------------------
	-هذا الرابط صالح لمده 24 ساعه فقط
	---------------------
	**`)
	      message.author.sendEmbed(Embed11)
	    }
});

client.on('message', message => {
	if (true) {
  if (message.content === '-invite') {
		message.author.send('  رابط بوتك  |  تفضل ربط البوت     ').catch(e => console.log(e.stack));
   
	  }
	 }
	});
   
   
  client.on('message', message => {
	   if (message.content === ".invite") {
	   let embed = new Discord.RichEmbed()
	.setAuthor(message.author.username)
	.setColor("#9B59B6")
	.addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
	   
	   
	   
	message.channel.sendEmbed(embed);
	  }
  });


  lient.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted'));
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
      .addField(`by`,`ALPHACODES`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500)
   
       
    }
    }
})

client.on("message", message => {
	var prefix = "-";
    const command = message.content.split(" ")[0];
 
    if(command == prefix+"اطرد"){
 
        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }
 
        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }
 
    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
       
 
 
   
      });
     });
    }
});

client.on('message', message => {
	if(!message.channel.guild) return;
if (message.content.startsWith('-ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**WebSocket:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});

client.on('message',message =>{
    var prefix = "-";
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("صوره بوتك هنا")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

  client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

lient.on('message',async message => {
	function timeCon(time) {
	let days = Math.floor(time % 31536000 / 86400);
	let hours = Math.floor(time % 31536000 % 86400 / 3600);
	let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
	let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
	days = days > 9 ? days : '0' + days;
	hours = hours > 9 ? hours : '0' + hours;
	minutes = minutes > 9 ? minutes : '0' + minutes;
	seconds = seconds > 9 ? seconds : '0' + seconds;
	return `${days > 0 ? `${days} Days ` : ''}${(hours || days) > 0 ? `${hours} Hours ` : ''}${minutes} Mins ${seconds} Secs`;
	}
	
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(message.content.startsWith(prefix + "bot")) {
	  let ramUsage = (process.memoryUsage().rss / 1048576).toFixed();
	  let upTime = timeCon(process.uptime());
	  let createdAt = moment(client.user.createdAt).fromNow();
  
  let m = await message.channel.send(`\`\`\`asciidoc\n= Normal Information =
  Creator :: ${client.users.get("332549868218220556").username} - ${createdAt}
  Ping :: ${client.pings[0]} ms
  UpTime :: ${upTime}
  
  = Servers Information =
  Servers :: ${client.guilds.size}
  Users :: ${client.users.size}
  Channels :: ${client.channels.size}
  
  = Developer Information =
  NodeJS :: ${process.version}
  DiscordJS :: ${Discord.version}
  Arch :: ${process.arch}
  Platform :: ${process.platform}
  
  = Host Information =
  UsedHeap :: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB
  Heap :: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB
  Ram :: ${ramUsage} MB
  Rss :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB
  \`\`\``);
	}
  });
	
  const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(- + "credit" || - + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith( - + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});

client.on("guildMemberAdd", member => {
	member.createDM().then(function (channel) {
	return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })

  client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('https://www.stmaryk12.net/domain/905')
var channel =member.guild.channels.find('name', 'chat-arabjoker')
if (!channel) return;
channel.send({embed : embed});
});

if (message.content === '-help') {
	let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
 .addField("**:globe_with_meridians: الأوامر العامه**","** **")
 .addField("***ping :stopwatch:**","**لـ سرعة إتصالك**")
 
 .addField("***avatar :camping:**","**لـ صور الشخص المختار**")
 .addField("***roll :1234:**","**لـ القرعه من 1 - 100**")
 .addField("***server :recycle:**","**لـ معلومات السيرفر**")

  .addField("***topive**","**لـــ معرفة دعواتك في السيرفر**")
  
  
   .addField("***رابط **","**لـــا عطاك رابط السيرفر**")
   .addField("**Ba @- Riverrr ?#1111 **")

.setColor('RANDOM')
message.author.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == - + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});



client.login('token');