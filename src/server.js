const express = require("express")
const nunjucks = require("nunjucks")

const db = require("./database/db")


const server = express()

server.use(express.static("public"))


nunjucks.configure("src/views", {
    express: server,
    noCache: true
 })


server.get("/", function(req, res){
    return res.render("index.html")
})

server.get("/create-point", function(req, res){
    return res.render("create-point.html")
})

server.get("/search", function(req, res){

    db.all(`SELECT * FROM places`, function(err, rows){
        if (err) {
            return console.log(err);
        }

        console.log("Aqui estão seu registros");
        console.log(rows);
    })

    return res.render("search-results.html")
})

server.listen(3000)