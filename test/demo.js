const fs = require('fs')
const path = require('path')
const cronClearFiles = require('../bin/cron-clear-files.js').default

const folder = path.join(__dirname, 'files')
console.log(folder)
cronClearFiles('* * * * * *', folder, new Date().getTime())
setTimeout(() => {
  console.log(fs.readdirSync(folder))
}, 5000)