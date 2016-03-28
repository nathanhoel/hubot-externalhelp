// Description:
//   Loads help from external scripts
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   None
//
// Author:
//   nathanhoel

var path = require('path');
var fs = require('fs');

function fromDir(startPath, dirFilter, fileFilter, callback) {
    var files = fs.readdirSync(startPath);
    for(var i = 0; i < files.length; i++){
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory() && dirFilter.test(filename)) {
            fromDir(filename, filter, callback);
        } else if (filter.test(filename)) {
          callback(filename);
        }
    };
};

module.exports = function(robot) {
  robot.brain.on('loaded', function {
    fromDir('./node_modules', /^hubot/i, /package\.json/i, function(filename) {
      var package = require(filename);
      var scriptPath = path.join(path.dirname(filename), package.main);
      robot.parseHelp(scriptPath);
    });
  });
};
