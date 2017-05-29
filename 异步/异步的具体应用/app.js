/**
 * Created by Administrator on 2017/4/19.
 */
var express = require("express");
var app = express();

app.use(express.status('public'));
app.set('views','./views');
app.set('view engine','ejs');
app.get('/',function (req, res) {
    res.render('index',{
        title:'首页'
    })
})
app.listen(3000,function () {
    console.log('node is ok')
})