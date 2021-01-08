
    /* global __dirname, process */
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const port = process.env.PORT || 8081;
    
    const cookieParser = require('cookie-parser');
    const session = require('express-session');
    //const alert = require('alert-node');
    
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        //cookie: { secure: true }
    }));
    
    app.use(cookieParser())
    
    //inicializarPassport(passport, user =>user.find(user.user1 === user));
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use(express.static('www'));
    
    app.use(bodyParser.json());
    
    app.get('/',(req,res)=>{
        res.sendFile('index.html', { root: __dirname });
    });
    
    app.listen(port, ()=>{
        //console.log(`Servidor a correr na porta ${port}`);
    })
    
    app.post('/register', async(req,res)=>{
    
            if(req.body.pass2 == req.body.pass3){
    
                const mysql = require('mysql');
        
                const con = mysql.createConnection({
                    host: "localhost",
                    user: "root_PW",
                    password: "toor_PW",
                    database: "proj_PW"
                });
        
                con.connect(function(err){
                    if(err) throw err;
                    //console.log("Conectado!");
                });
        
                let userVer = "SELECT * FROM `users` WHERE User = " + '"' + req.body.user1 + '"' + ';' ;
    
                let resultado;
    
                let sql = `INSERT INTO users(Nome,User,Pass,Data_Nasc) VALUES(` + '"' + req.body.nome + '"' + `,` + '"' + req.body.user1 + '"' + `,` + '"' + req.body.pass2 + '"' + `,` + "'" + req.body.dataN + "'" + `)`;
    
                con.query(userVer, function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    console.log(result.length);
                    resultado = result.length;
                });
    
                if(resultado == 0){
                    con.query(sql);
                }
        
                con.end();
    
                res.redirect('/');
                
        
            }else{
                console.log("Erro");
            }
    
    })
    
    
    app.post('/login', async(req,res)=>{
        const mysql = require('mysql');
    
        const con = mysql.createConnection({
            host: "localhost",
            user: "root_PW",
            password: "toor_PW",
            database: "proj_PW"
        });
    
        con.connect(function(err){
            if(err) throw err;
            //console.log("Conectado!");
        });
    
    
    
        let sql = "SELECT id FROM `users` WHERE User = " + '"' + req.body.user + '"' + ` AND Pass = ` + '"' + req.body.pass + '"' + ';' ;
    
        con.query(sql, function(err, result) {
            if (err) throw err;
            //console.log(result);
            //console.log(result.length);
            if(result.length == 1){
                req.session.userId = result[0].id;
            }
            //console.log('User Id:', req.session.userId);
            res.cookie('userId', req.session.userId);
            //console.log(req.cookies);
            res.redirect('/');
        });
        con.end();
    })
    
    
    app.post('/deleteCookies', async(req,res)=>{
    
        res.clearCookie('userId');
        console.log(req.cookies);
    
        res.redirect('/');
    
    })
    
    
    app.post('/postAdd', async(req,res)=>{
    
        const mysql = require('mysql');
        
        const con = mysql.createConnection({
            host: "localhost",
            user: "root_PW",
            password: "toor_PW",
            database: "proj_PW"
        });
    
        con.connect(function(err){
            if(err) throw err;
            //console.log("Conectado!");
        });
    
        let sql = `INSERT INTO post(userId, postTitle, post) VALUES(` + '"' + req.cookies.userId + '"' + `,` + '"' + req.body.postTilte + '"' + ',' + '"' + req.body.postText + '"' + `)`;
    
        con.query(sql);
    
        con.end();
    
        res.redirect('/');
    
    })
    
    app.post('/getposts', async(req,res) =>{
    
        const mysql = require('mysql');
        
        const con = mysql.createConnection({
            host: "localhost",
            user: "root_PW",
            password: "toor_PW",
            database: "proj_PW"
        });
    
        con.connect(function(err){
            if(err) throw err;
            //console.log("Conectado!");
        });
    
        let selPosts = "Select * from post;";
        con.query(selPosts, function(err, rows){
            if(err){
                throw err;
            }else{
                res.json(rows);
                //console.log(rows);
            }
        });
    
        con.end();
    
    })
    
    
    app.post('/ticketSend', async(req,res)=>{
    
        const mysql = require('mysql');
        
        const con = mysql.createConnection({
            host: "localhost",
            user: "root_PW",
            password: "toor_PW",
            database: "proj_PW"
        });
    
        con.connect(function(err){
            if(err) throw err;
            //console.log("Conectado!");
        });
    
        let sql = `INSERT INTO ticket(nome, email, ticket, texto) VALUES(` + '"' + req.cookies.nomeCompleto + '"' + `,` + '"' + req.body.emailUser + '"' + ',' + '"' + req.body.tickets + '"' + ',' + '"' + req.body.Comentario + '"' +  `)`;
    
        con.query(sql);
    
        con.end();
    
        res.redirect('/');
    
    })
    