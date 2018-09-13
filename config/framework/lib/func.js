const fs = require('fs')
const path = require('path')

// 创建或更新文件
function CreateFile (p, filename, con, isUpdate = false) {
  let newFile = path.resolve(p, filename)
  if (isUpdate || !fs.existsSync(newFile)) {
    fs.writeFileSync(newFile, con)
    // console.log('filename::',filename);
  }
}

function CreateDir (path, mode = '0777') {
  if (!fs.existsSync(path)) {
    if (!fs.mkdirSync(path, mode)) {
      return false
    }
  }
  return true
}

// 首字母转大写
function FirstUpperCase (str) {
  return str.replace(/^\S/, function (s) {
    return s.toUpperCase()
  })
}

// 判断文件是否存在
function ExistsFile (p, ...args) {
  let newFile = path.resolve(p, ...args)
  return fs.existsSync(newFile)
}

//读文件
function ReadFile (file, coding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(file, coding, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    });
  })

}


module.exports = {
  CreateFile,
  CreateDir,
  FirstUpperCase,
  ExistsFile,
  ReadFile
}