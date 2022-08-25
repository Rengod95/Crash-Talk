const express = require("express");
const path = require('path');
const router = express.Router();

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.DB_port,
    database: process.env.database,
});
connection.connect();

router.get("/", (req, res) => {
    res.send("server is up and running");
});

router.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let checkEmail = "SELECT * FROM user WHERE email='" + email + "';";

    connection.query(checkEmail, function (err, rows) {
        if (req.headers.header === 'LOGIN_USER'){
            if (rows.length == 0) {
                res.json({
                    validity: false,
                    reason: '가입한 이메일이 없습니다.',
                    userInfo: req.body,
                });
            } else if (password !== rows[0]['password']) {
                res.json({
                    validity: false,
                    reason: '이메일은 있지만, 비밀번호가 일치하지 않습니다.',
                    userInfo: req.body,
                });
            } else {
                res.json({
                    validity: true,
                    reason: '로그인 성공!',
                    userInfo: req.body,
                });
            }
        }
    });
});


router.post("/register", (req, res) => {
    console.log(req.body);

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let nickname = req.body.nickname;
    let symbol_id = null;

    let checkEmail = "SELECT email FROM user WHERE email='" + email + "';";

    connection.query(checkEmail, function (err, rows) {
        if (rows.length == 0 && req.headers.header === "REGISTER_USER") {
            let sql = {
                name: name,
                email: email,
                password: password,
                nickname: nickname,
                symbol_id: symbol_id
            };

            connection.query('INSERT INTO user set ?', sql, function (err, rows) {
                if (err) throw err;
                else {
                    res.send('가입 성공');
                }
            });
        } else {
            res.send('중복된 아이디');
        }
    });
});

router.post("/home", (req, res) => {
    if (req.headers.header === "JOIN_ROOM") {
    }
});

router.post("/room", (req, res) => {
    if (req.headers.header === "") {
    }
});


module.exports = router;
