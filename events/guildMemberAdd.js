module.exports = member => {
    let username = member.user.username;
    member.send('Sunucuya Hoş Geldin!');
    member.guild.defaultChannel.send('');
};

  const channel = member.guild.channels.find('name', 'örnek-görüşürüz');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('0xff1a1a')
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(`:outbox_tray: ${member.user.username} Sunucudan ayrıldı.`)
  .setTimestamp()
  channel.sendEmbed(embed);
});
