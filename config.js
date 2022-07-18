const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'sonelstore',
}

// Other
global.owner = ['6289516947204']
global.premium = ['6289516947204']
global.ownername = '𝚒𝚢𝚊𝚗Ⓒ︎'
global.botname = '𝚁𝙲𝚃𝙸 𝙱𝙾𝚃
global.packname = '𝚁𝙲𝚃𝙸 𝙱𝙾𝚃'
global.gc = 'https://tinyurl.com/22phnfwc'
global.limitawal = '100'
global.author = '@𝚁𝙲𝚃𝙸 𝙱𝙾𝚃'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: '*DONE NGAB🤗*',
    admin: '*Lu Admin🤨?*',
    botAdmin: '*Botnya Admin Dulu Lah Bjirr🤧*',
    owner: '*Lu Bukan Owner Gua😠*',
    group: '*Mikir dikit anj!!,ini bukan group😤*',
    private: '*Chat pribadi!!👿*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Weit Semdang DiProses😁*',
    endLimit: '*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/IMG-20220605-WA0030.jpg')
global.allmenu = fs.readFileSync('./media/IMG-20220605-WA0033.jpg')
global.thumb = fs.readFileSync('./media/IMG-20220604-WA0033.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
