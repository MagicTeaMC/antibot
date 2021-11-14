const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('bot status', client.user.presence.status);
    console.log('bot is start now');
    console.log('if you want to stop bot , please close this window :)');
    client.user.setActivity("輸入 a#help 取得幫助 V1.1");


});

client.on('message', msg => {
    
    if (msg.content === '@everyone') {
        
        msg.channel.send('@everyone');
    }
});

client.on('message', msg => {
    
  if (msg.content === 'a#help') {
      
      msg.channel.send('請輸入a#anti開始炸服，邀請連結請輸入a#inv，指令列表請輸入a#com(如因使用此炸群機器人造成他人的損失/麻煩， 我們將恕不負責。)');
  }
});

client.on('message', msg => {
    
  if (msg.content === 'a#anti') {
      
      msg.channel.send('@everyone');
  }
});

client.on('message', msg => {
    
  if (msg.content === 'ping') {
      
      msg.channel.send('pong🏓');
  }
});

client.on('message', msg => {
    
  if (msg.content === 'yee') {
      
      msg.channel.send('yee');
  }
});

client.on('message', msg => {
    
  if (msg.content === 'a#inv') {
      
      msg.channel.send('目前不開放邀請連結');
  }
});

client.on('message', msg => {
    
  if (msg.content === 'a#com') {
      
      msg.channel.send('網頁製作中');
  }
});



client.login(token);