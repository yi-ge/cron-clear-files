import fs from 'fs'
import path from 'path'
import cronClearFiles from '../src/index'

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

test('cronClearFiles', async () => {
  const folder = path.join(__dirname, 'files')
  cronClearFiles('* * * * * *', folder, new Date().getTime())
  await sleep(3000)
  expect(fs.readdirSync(folder).length).toBe(0)
})
