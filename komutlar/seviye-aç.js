const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  
       
 
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  
    
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
  
  if(hm) return message.reply('Bu tuhaf! Anlaşılan seviye sistemi zaten aktif edilmiş.. \n Bunu mu arıyorsun? `!seviye-kapat`')
  
  
  
  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
  
  
  let kontrol;
  if(kanal == null) kontrol = ':x: Sunucuda Ayarlanmış Bir Log Bulunamadı!'
  else kontrol = kanal
  
  let kontrol2;
  if(xp == null) kontrol2 = '4 (Varsayılan)'
  else kontrol2 = xp
  
  let kontrol3;
  if(seviyerol == null) kontrol3 = ':x: Seviye Rol Sistemi Aktif Değil!'
  else kontrol3 = seviyerol
  
  
  let codeming = new Discord.MessageEmbed()
  .setTitle(' | Aktif Edildi!')
  .setDescription(message.guild.name + ' Sunucusuna başarıyla seviye sistemini aktifleştirdim!\n Genel ayarlar aşağıda veriliyor..')
  .addField('Seviye Log Kanalı:', kontrol, true)
  .addField('Mesaj Başı Verilecek XP:', kontrol2, true)
  .addField('Seviye Rol:', kontrol3)
  .setFooter('LevelUP https://discord.gg/aYzGavbFXS')
  .setColor('RANDOM')
  message.channel.send(codeming)
 
message.guild.owner.send('Seviye sistemi **'+message.member.user.username+'** ('+message.member.id+') tarafından aktifleştirildi!\n `LevelUP https://discord.gg/aYzGavbFXS`')
  
  
db.set(`seviyeacik_${message.guild.id}`, 'açık')

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'seviye-aç',
  description: 'taslak', 
  usage: 'seviye-aç'
};