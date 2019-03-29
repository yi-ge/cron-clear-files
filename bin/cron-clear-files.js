"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _nodeSchedule = _interopRequireDefault(require("node-schedule"));

var _default = (cron, folder, timestamp = new Date().getTime()) => {
  _nodeSchedule.default.scheduleJob(cron, function () {
    _fs.default.readdir(folder, function (err, files) {
      if (err) {
        console.error(err);
      } else {
        files.forEach(function (filename) {
          const filedir = _path.default.join(folder, filename);

          _fs.default.stat(filedir, function (eror, stats) {
            if (eror) {
              console.error(eror);
            } else {
              const isFile = stats.isFile(); // const isDir = stats.isDirectory()

              if (isFile && stats.mtime.getTime() < timestamp) {
                _fs.default.unlink(filedir, e => {
                  if (e) console.error(e);
                });
              }
            }
          });
        });
      }
    });
  });
};

exports.default = _default;
