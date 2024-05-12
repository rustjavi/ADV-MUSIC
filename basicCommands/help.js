const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **:gear: Prefix:** ?\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Music',
          value: 'play, history, volume, pause, resume, 247',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1238619545506414665/1239158112087183480/AIdro_nYlUJDu7wOPmgWCLoyf9J1OiSvG7U-zOgv81P8Je-Pz1Ys900-c-k-c0x00ffffff-no-rj.png?ex=6641e76c&is=664095ec&hm=c3bdf7c878fb1402f908600ecaf61945d59df64656f04ea0f76d43d97f9b0d31&`);

    const button1 = new ButtonBuilder()
      .setLabel('Kick')
      .setURL('https://www.kick.com/rustjavi')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
