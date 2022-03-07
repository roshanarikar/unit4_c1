const express = require("express");
const app = express();

// GET /books => this should return response of { route: "/books"}

// GET / libraries => this should return response of { route: "/libraries", permission: true}

// GET /authors => this should return response of { route: "/authors", permission: true}

app.get('/books',(req,res) =>{
    return res.send({ route: "/books"})
})

app.get('/libraries',(req,res) =>{
    return res.send({ route: "/libraries", permission: true})
})

app.get('/authors',(req,res) =>{
    return res.send({ route: "/authors", permission: true})
})
app.listen(3000,() =>{
    console.log("Listening on port 3000")
});