const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);
const db = require('./modules/db.js');

const environment = "production";

const sessions = require("client-sessions");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sessionMiddleware = sessions({
    cookieName: 'sess',
    secret: 'dws9iu3r42mx1zvh6k5m',
    duration: 2 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 60
})

app.use(sessionMiddleware);

app.post("/setSession", function (req, res) {
    req.sess.username = req.body.username;    // username is stored in sess variable
    console.log(req.sess.username + " logged in");  // username can be accessed using req.sess.username
    res.sendStatus(200);
});

app.get("/unsetSession", function (req, res) {
    if (environment == "development") {
        req.sess.username = null;
        res.sendStatus(200);
    } else if (environment == "production") {
        res.sendStatus(400);
    }
});

app.use(function (req, res, next) {
    if (!req.sess.username) {
        let login = `<script>
        var username = prompt("Enter username");
        if (username) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    window.location = "/";
                }
            };
            xhttp.open("POST", "/setSession", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("username=" + username);
    
        }
    </script>`;
        if (environment == "development") {
            res.send(login);
        } else if (environment == "production") {
            res.redirect('https://teknack.in');
        }
    } else {
        next();
    }
});

io.use(function (socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
});

app.use(express.static(__dirname));

io.on('connection', function (socket) {

    socket.on('test', function () {
        var username = socket.request.sess.username;   // accessing username inside sockets 
        console.log(username + " connected");
        console.log('test received');
    });
    socket.emit('hellosocket');

    socket.on('sendScore', function (counter) {
        var username = socket.request.sess.username;
        var record = { name: username, score: counter };
        console.log(record);
        db.insertScore(record);
    })

    socket.on('getHighScore', function () {
        db.getScore(function (counter) {
            socket.emit('sendHighScore', counter);
        })
    })

});





server.listen(3006, function()
{
    console.log('App listening on port 3006')
});

//db.insertScore({name: 'Nitin', score: 50000 });

var func = function(counter){
    console.log(score);
}


//db.getScore(func);




