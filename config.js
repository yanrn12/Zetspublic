const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6281322667077']
global.premium = ['6281215710461']
global.ownername = 'Romli Suhanda'
global.botname = 'ZxyuuBOTZ-MD'
global.packname = '© ZxyuuRomm'
global.gc = 'https://chat.whatsapp.com/ItgtoArOdVD46P7S9cA179'
global.limitawal = '100'
global.author = 'XzyuuNaii'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: '*DONE NGAB..*',
    admin: '*Fitur Khusus Admin NGNTD!!*',
    botAdmin: '*Botnya Admin Dulu Lah Knt*l*',
    owner: '_*Lu Bukan Owner Gua Bangke*_',
    group: '_*Mikir dikit anj!!,ini bukan group*_',
    private: '*Chat pribadi!!*',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '*Wait Tod Lagi Proses!!*',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
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
