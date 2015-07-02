var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', index);
router.get('/login', login);
router.post('/login', dologin);
router.get('/home', home);
router.get('/logout', logout);

function index(req, res, next){
  res.render('index', { title: '欢迎登录' });
}
function login(req, res, next) {
  res.render('login', { title: '用户登录' });
}
function dologin(req, res, next){
    var user = {
        username: 'admin',
        password: 'admin'
    };
    if(req.body.username===user.username && req.body.password===user.password){
        res.redirect('/home');
    }
    res.redirect('/');
}
function home(req, res, next){
    var user = {
        username: 'admin',
        password: 'admin'
    }
    res.render('home', {title:'首页', user: user});
}
function logout(req, res, next){
    res.render('index', { title: '欢迎登录' });
}
module.exports = router;
