const express = require('express')
const app = express()

var morgan = require('morgan') //日志
app.use(morgan('dev')) //使用中间件

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static('./public'))
// 展示所有的问题


// 当我浏览器访问网站根目录的时候执行
app.get('/',(req,res)=>{
    // 重定向到指定的页面 问题列表
    res.redirect('/qa/list')
})

// 引入接口文件模块
app.use('/',require('./controllers/api/qa'))
app.use('/qa',require('./controllers/qa/index'))
app.listen(3000,()=>{
    console.log('服务器运行于3000端口...')
})