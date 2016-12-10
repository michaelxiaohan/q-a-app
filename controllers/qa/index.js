var express = require('express')
var router = express.Router()
var fs = require('fs')
var dal = require('../../common/data')
console.log(dal)

// 问题列表页
router.get('/list',(req,res)=>{
    dal.readDataFromFile(arr=>{
        res.render('qa/list',{data:arr})
    })
})

// 提问页面
router.get('/ask',(req,res)=>{
    res.render('qa/ask')
})

// 详情页
router.get('/detail/:aid',(req,res)=>{
    var aid = req.params.aid
    dal.readDataFromFile((arr)=>{
        var result = arr.find((item)=>{
            if(item.id == aid){
                return item
            }
        }) 
        // 使用指定的数据 渲染模板 
        res.render('qa/detail',{data:result})
    })   
})


module.exports = router