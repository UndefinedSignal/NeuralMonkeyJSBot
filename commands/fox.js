const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports.run = (client, message, args) => {
	let res = fetch('https://some-random-api.ml/img/fox')
		.then(res => res.json())
		.then(json => {
			const embed = new Discord.MessageEmbed()
			    .setColor("RANDOM")
			    .setTitle(`${message.guild.name}, лисички :)`)
			    .setImage(json.link)
			message.channel.send({embeds: [embed]});
		});
}
module.exports.help = {
    name: 'fox'
}