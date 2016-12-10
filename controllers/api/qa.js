var express = require('express')
var router = express.Router()
const fs = require('fs')


// 提问页面
router.post('/api/ask',(req,res)=>{
    //此处需要把提交的问题信息保存在文件中
    var obj = {}
    obj.id = Date.now() // 时间戳
    obj.content = req.body.content // 等于客户端传递过来的参数

    // 把数据存储在data文件夹下的q-a.json文件中
    // 首先需要判断文件中是否有内容
    var arr = [] //用于存储数据使用
    fs.readFile('./data/q-a.json',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            if(data.toString()!=""){
                arr = JSON.parse(data.toString())
            }  
        }
        arr.unshift(obj) // 把最新的记录插入数组开始
        fs.writeFile('./data/q-a.json',JSON.stringify(arr))
        res.json({status:'y',msg:'提交成功'})
    })
})

// 回答问题
router.post('/api/do_answer',(req,res)=>{
    fs.readFile('./data/q-a.json',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            var arr = JSON.parse(data.toString())
            for(var i=0;i<arr.length;i++){
                if(arr[i].id == req.body.aid){
                    var obj = {}; //初始化回答数据
                    obj.id = Date.now();
                    obj.content = req.body.content;
                    // 判断当前问题是否存在答案
                    if(arr[i].answers){
                        arr[i].answers.unshift(obj)
                    }
                    else{
                        arr[i].answers = []
                        arr[i].answers.unshift(obj)
                    }
                }
            }
            fs.writeFile('./data/q-a.json',JSON.stringify(arr))
            res.json({
                status:'y',
                msg:'回答成功'
            })
        }

    })
})
module.exports = router;