/**
 * Created by laomao on 2017/11/30.
 */
const fs = require('fs')

function readDirSync (path, dirData, fileData) {
  var pa = fs.readdirSync(path)
  pa.forEach(function (ele, index) {
    var info = fs.statSync(path + ele)
    if (info.isDirectory()) {
      // console.log("dir: "+ele)
      var obj = {
        child: [],
        name: (path + ele).replace(/\\/g, '/')
      }
      dirData.push(obj)
      readDirSync(path + ele + '/', obj.child, fileData)
    } else {
      // console.log("file: "+ele)
      fileData.push((path + ele).replace(/\\/g, '/'))
    }
  })
}

function getDirTree (path) {
  var dirData = []; var fileData = []
  readDirSync(path, dirData, fileData)
  // console.log(JSON.stringify(data));
  return Promise.resolve({dirData, fileData})
}

module.exports = getDirTree
