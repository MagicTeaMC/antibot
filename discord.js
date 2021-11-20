const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();

const versionCheck = require('github-version-checker');
const pkg = require('./package.json');

// version check options (for details see below)
const options = {
    token: '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', // personal access token (can be omitted to use the v3 api)
    repo: 'antibot', // repository name
    owner: 'clpsclps', // repository owner
    currentVersion: pkg.version, // your app's current version
};
versionCheck(options, function(error, update) { // callback function
    if (error) throw error;
    if (update) { // print some update info if an update is available
        console.log('新版本已經發布! ' + update.name);
    }
});

client.on('ready', () => {
    console.log(`啟動機器人 ${client.user.tag}!`);
    client.user.setPresence({
        status: 'idle',
        activity: {
            name: '請輸入a#help取得幫助 V1.0.1 BETA',
        }
    });
    console.log('機器人已啟動');
    console.log('關閉視窗以關閉機器人 :)');
    console.log('-------------指令使用日誌----------------');
});

client.on('message', msg => {

    if (msg.content === '@everyone') {

        msg.channel.send('@everyone');
    }
});

client.on('message', msg => {

    if (msg.content === 'a#help') {
        console.log('有人使用 a#help command');
        msg.channel.send('音樂指令即將完成!  主要指令:請輸入a#anti開始炸服，邀請連結請輸入a#inv，如因使用此炸群機器人造成他人的損失/麻煩， 我們將恕不負責。');
    }
});

client.on('message', msg => {

    if (msg.content === 'a#anti') {
        console.log('有人使用 a#anti command');
        msg.channel.send('@everyone');
    }
});


client.on('message', msg => {

    if (msg.content === 'a#ping') {
        console.log('有人使用 a#ping command');
        msg.channel.send(`本機器人的ping為 ${client.ws.ping} ms`);
    }
});

client.on('message', msg => {

    if (msg.content === 'yee') {

        msg.channel.send('yee');
    }
});

client.on('message', msg => {

    if (msg.content === 'a#inv') {
        console.log('有人使用 a#inv command');
        msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=904349432559067187&permissions=380238032720&redirect_uri=https%3A%2F%2Fwww.milkteacat.gq%2F&scope=bot');
    }
});

client.on('message', msg => {

    if (msg.content === '@<904349432559067187>') {
        console.log('有人ping this bot');
        msg.channel.send('指令網頁製作中');
    }
});

client.login(token);