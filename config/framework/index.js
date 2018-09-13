/**
 * Created by laomao on 2017/11/30.
 */
const watch = require('./lib/watch')
const func = require('./lib/func')
const getDirTree = require('./lib/getDirTree')

let watchObj = {}



function framework (options = {}, config = {}) {

  this.updateNumber = 0
  this.options = Object.assign({
    root: "src/",
    watch: true,
  }, options);
  //console.log('options:', options, config);
  watchObj = config

  // Configure your plugin with options...

}

//入口
framework.prototype.apply = function (compiler) {

  this.appRoot = (compiler.context + '/' + this.options.root).replace(/\\/g, "/");
  for (let id in watchObj) {
    let w = watchObj[id]
    let dir = this.appRoot + w.watchPath
    let param = { id, dir }

    this.change(param)
    if (this.options.watch) {
      watch(param, (obj) => {
        this.change(obj)
      })
    }

  }

  compiler.plugin('make', (compilation, callback) => {

    this.updateEnd = () => {
      if (this.updateNumber === 0) {
        console.log('update end')
        callback && callback()
      } else {
        console.log('updating...')
      }
    }

    this.updateEnd()

  })
}

//监听变化
framework.prototype.change = function (obj) {

  this.updateNumber++
  let { dir, id } = obj
  let tplPath = this.appRoot + watchObj[id].tplPath
  let watchConfig = { ...watchObj[id], appRoot: this.appRoot }
  let tplObj = require(tplPath + 'index.js')
  console.log(id + 'Change init...')

  return getDirTree(dir)
    .then(res => {
      let { dirData } = res

      let pdata = []
      dirData.forEach(o => {
        let configFile = o.name + '/config.json'
        let _file, c

        
        if (func.ExistsFile(configFile)) {
          c = require(configFile)
          _file = true
        } else {
          c = tplObj.getConfig(watchConfig)
          _file = false
        }

        pdata.push({ ...c, _file, _path: o.name, watchConfig, nodeObj: res })

      })

      return pdata

    })
    .then(data => {
      return tplObj.build(data)
    })
    .then(() => {
      console.log(id + 'Change end...', this.updateNumber)
      this.updateNumber--
      this.updateEnd()
    })

}

module.exports = framework


//node test
new framework({ watch: true }, require('../watch.config.json')).apply({
  context: "/Users/laomao/projects/work/hipos-tool",
  plugin: function (id, func) {
    if (id === 'make') {
      func({}, () => {

      })
    }
  }
})