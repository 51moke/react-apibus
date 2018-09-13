













function build (obj) {
  //console.log('编译', obj)
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },2000)
  })
}

//默认config.json数据
function getConfig (param) {
  return {
    reducer: ['Reducer.js'],
  }
}

module.exports = { build, getConfig }
