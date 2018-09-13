function build (obj) {
  //console.log('页面编译', obj)
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },5000)
  })
}

//默认config.json数据
function getConfig (param) {
  return {
    reducer: ['Reducer.js'],
  }
}

module.exports = { build, getConfig }
