# Cron Clear Files
[![npm version](https://img.shields.io/npm/v/cron-clear-files.svg?style=flat-square)](https://www.npmjs.org/package/cron-clear-files)
[![npm](https://img.shields.io/npm/dt/cron-clear-files.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cron-clear-files)
[![Github file size](https://img.shields.io/github/size/yi-ge/cron-clear-files/bin/cron-clear-files.js.svg?style=flat-square)](https://github.com/yi-ge/cron-clear-files/blob/master/bin/cron-clear-files.js)
[![license](https://img.shields.io/github/license/yi-ge/cron-clear-files.svg?style=flat-square)](https://github.com/yi-ge/cron-clear-files/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/yi-ge/cron-clear-files.svg?style=flat-square)](https://github.com/yi-ge/cron-clear-files)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Clear expired files in the folder.

## Usage
```
npm i cron-clear-files
```

```javascript
import cronClearFiles from 'cron-clear-files'

cronClearFiles('0 0 0 * * *', path, new Date().getTime() - 1000 * 3600 * 24) // Delete files created a day ago
```
