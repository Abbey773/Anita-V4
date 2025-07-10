require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER;2349123675528
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";

// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoRecord = toBool(process.env.AUTO_RECORD);
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.LEVELUP = toBool(process.env.LEVELUP);
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);

global.public = process.env.PUBLIC === 'true';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.WELCOME = toBool(process.env.WELCOME);

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '.';
global.autobio = toBool(process.env.AUTO_BIO);
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);
global.ANTICALL = toBool(process.env.ANTICALL);
global.antilink = toBool(process.env.ANTILINK);
global.antilinkkick = toBool(process.env.ANTILINK_KICK);
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);

{"noiseKey":{"private":{"type":"Buffer","data":"mK92TrlaznQ0/2ilz4HwyGWKMGfXiRB3OrKXzOr+DFw="},"public":{"type":"Buffer","data":"7zbelaQH0MtEgmFHGWoratLhR3KXZZuNBgv4Yi9DICU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"MJ4o9LHFOWkv5Xz0B0y6uIvByLLjo2ZuLcVvn6pxeVk="},"public":{"type":"Buffer","data":"5rMa/LL5obf9Y21yP1b4imBzPihVHA12ZmxXFf9feCo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"yAG/qfk4o3zZag/VP7/Ipa0Za2SX4AGHS/r4X+uodFA="},"public":{"type":"Buffer","data":"CxXlZ7Eq0IpEd/EfnrDCsdFx9vaI3czp0Wfdl1FMCRA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"kHIEltMdaHww5AAzfyzCibQIgRKBnJHCxFPK19xmnWo="},"public":{"type":"Buffer","data":"1+wD799DaAS8qJJJLD/xth6KHg73V9luv3zespXRtAo="}},"signature":{"type":"Buffer","data":"LbjsLdoAbFnMeT753Flr4Br2E1ZQASH02vDJtBUj8S5HZ+L4ro4w8qnl76oEzjDbq9VK2dCDsA4/U6QdOltcBg=="},"keyId":1},"registrationId":104,"advSecretKey":"OKkKyl3YhGylqDqpDYRn0slCmON/7MxmG+mxjZas+WI=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"CYRILDEV","me":{"id":"2349123675528:2@s.whatsapp.net","name":"Abbey","lid":"81527723577599:2@lid"},"account":{"details":"CIbE4MoFEIKnwMMGGAEgACgA","accountSignatureKey":"KTD5MdMd9/N2gpL7y6mDCGFLGtp64LKQQ9Kl6eax2TU=","accountSignature":"avWywebdOwLTKL8KEw0HImUxrUsIaBZgje2Gp7n+F48rqFNJhpirM4jUeh0QXbf86fRUYPSPf3jqI/SpoQ+PCw==","deviceSignature":"4brVwsB4kYoWEYcD5XFqCacuKNXb4uS7uxH2Ic5Dt4qFdMDRd4b32N16C+HjH/WeaknKQNaQhvpLHc+453hgDQ=="},"signalIdentities":[{"identifier":{"name":"2349123675528:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSkw+THTHffzdoKS+8upgwhhSxraeuCykEPSpenmsdk1"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAIIEg=="},"lastAccountSyncTimestamp":1752175499,"lastPropHash":"2P1Yhf"}

// Messages
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
