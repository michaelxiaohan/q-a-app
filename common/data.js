var fs = require('fs')
var dal = {}
dal.kkk = function(){
    console.log('我是data.js中的一个方法')
}
dal.readDataFromFile = function(callBack){
    fs.readFile('./data/q-a.json',(err,data)=>{
        var arr = []
        if(err){
            console.log(err)
        }
        else{
            arr = JSON.parse(data.toString())
        }
        callBack(arr)
    })
}
module.exports = dal
