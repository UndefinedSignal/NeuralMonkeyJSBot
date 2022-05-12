const Discord = module.require("discord.js");
const fetch = require('node-fetch')
const fs = require("fs");

module.exports.run = async (client,message,args) => {

	if (!message.mentions.users.size) {
		let link = `https://some-random-api.ml/canvas/wasted/?avatar=${message.author.avatarURL({ format: 'png'})}`
		//const attachmentt = new Discord.MessageAttachment(link, '../assets/triggered.gif');
		const embed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username} ПОТРАЧЕНО!`)
		    .setImage(link)
		return message.channel.send({embeds: [embed]});
	}
	let targetMember = message.mentions.members.first();
	console.log(targetMember)
	if(targetMember){
		let link = `https://some-random-api.ml/canvas/wasted/?avatar=${targetMember.user.avatarURL({ format: 'png'})}`
		//const attachmentt = new Discord.MessageAttachment(link, 'triggered.gif');
		const embed = new Discord.MessageEmbed()
		    .setTitle(`${targetMember.user.username} ПОТРАЧЕНО!`)
		    .setImage(link)

		return message.channel.send({embeds: [embed]});
	}
	return
};
module.exports.help = {
    name: "wasted"
};