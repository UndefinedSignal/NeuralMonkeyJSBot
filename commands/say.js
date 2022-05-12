// client.channels.cache.get('CHANNEL ID').send('Hello here!')

const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {

	if (message.member.permissions.has('MANAGE_MESSAGES')){ // Can delete messages?
		let sms = args.join(" ");
	    message.channel.bulkDelete(1);
		message.channel.send(sms);
		console.log(`Пользователь ${message.author.username} отправил через say: ${args.join(" ")}`);
	}else {
		const adminerr2 = new Discord.MessageEmbed()
            .setColor('#fc5184')
            .setTitle(`${message.author.username}, вы не имеете прав на эту команду!`)
            .setAuthor(message.guild.name)
            .setFooter('Ваш бот bot © 2021')
        message.channel.send({embeds: [adminerr2]})
	}
};
module.exports.help = {
    name: "say"
};