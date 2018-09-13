
const watch = require('watch')
let timeOutObj = {}
//监听列表规则
let watchList = (Callback) => {

  return (f, curr, prev) => {
    // console.log(f, curr, prev)
    if (typeof f === 'object' && prev === null && curr === null) {
      // Finished walking the tree
      console.log('watch！！！')
      //Callback()
    } else if (prev === null) {
      // f is a new file
      console.log('new file：' + f)
      Callback()
    } else if (curr.nlink === 0) {
      // f was removed
      console.log('removed: ' + f)
      Callback()
    } else {
      // f was changed
      console.log('changed' + f, '>', f.slice(-11))
      let fileName = f.slice(-11)
      if (fileName === 'config.json') {
        Callback()
      }
    }
  }

}

let _watch = (obj, Callback) => {
  let { dir } = obj
  timeOutObj[dir]
  watch.watchTree(dir, watchList(() => {
    clearTimeout(timeOutObj[dir])
    timeOutObj[dir] = setTimeout(() => {
      Callback(obj)
    }, 1000)
  }))
}

module.exports = _watch