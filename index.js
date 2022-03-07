const express = require("express");
const app = express();

app.use(logger)
app.use(checkPermission)

app.get('/books',(req,res) =>{
    return res.send({ route: "/books"})
})

app.get('/libraries',(req,res) =>{
    return res.send({ route: "/libraries", permission: true})
})

app.get('/authors',(req,res) =>{
    return res.send({ route: "/authors", permission: true})
})

app.get('/open',loggIn("librarian"),(req,res) =>{
    return res.send("open Library")
})


function loggIn(role){
    return function logger(req,res,next){
        if(role === "librarian"){
            return next();
        }
        return res.send("No books");
    };
}

function logger(req,res,next){
    if(req.path === "/books"){
        req.role = "books";
    }
    else if(req.path === "/libraries"){
        req.role = "libraries";
    }
    else if(req.path === "/authors"){
        req.role = "authors";
    }
    else{
        req.role = "nothing";
    }
    next();
}

function checkPermission(req,res,next){
    if(req.path === "/libraries"){
        req.role = checkPermission("librarian");
    }
    else if(req.path === "/authors"){
        req.role = checkPermission("author");
    }
    else{
        req.role = "nothing";
    }
    next();
}
app.listen(3000,() =>{
    console.log("Listening on port 3000")
});