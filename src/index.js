import fs from 'fs'
import path from 'path'
import schedule from 'node-schedule'

export default (cron, folder, timestamp = new Date().getTime()) => {
  schedule.scheduleJob(cron, function () {
    fs.readdir(folder, function (err, files) {
      if (err) {
        console.error(err)
      } else {
        files.forEach(function (filename) {
          const filedir = path.join(folder, filename)
          fs.stat(filedir, function (eror, stats) {
            if (eror) {
              console.error(eror)
            } else {
              const isFile = stats.isFile()
              // const isDir = stats.isDirectory()
              if (isFile && stats.mtime.getTime() < timestamp) {
                fs.unlink(filedir, (e) => {
                  if (e) console.error(e)
                })
              }
            }
          })
        })
      }
    })
  })
}