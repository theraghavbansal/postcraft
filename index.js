const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
const methodOverride = require("method-override");

const port = process.env.PORT || 8080;
const path = require("path");
const {v4:uuidv4} = require("uuid");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

let      posts = [
    {
        id:uuidv4(),
    username:"RaghavBansal",
    content:"I love coding"
    },
     {
        id: uuidv4(),
    username:"CornexAi",
    content:"Hardwork is important for success"
    }, 
 {
    id: uuidv4(),
    username:"Harshitt",
    content:"I love hardwork"
    }
]

app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.get("/posts", (req,res)=>{
  res.render("index.ejs", {posts});
})
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
})

app.post("/posts", (req,res)=>{
   let {username, content} = req.body;
   let id = uuidv4()
   posts.push({id,username, content});

    // res.render("index.ejs", {posts});
    res.redirect("/posts");
    
})



app.get("/posts/:id", (req,res)=>{
   let {id} = req.params;
   console.log(id);
   let post = posts.find((p)=> id === p.id);
  
   
   res.render("show.ejs", {post});
    
})

app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
   
   console.log(id);
  let newContent = req.body.content;
  let post = posts.find((p)=> id === p.id);
  post.content = newContent;
  res.redirect("/posts");
  console.log(post);
   

})

app.get("/posts/:id/edit", (req,res)=>{
     let {id} = req.params;
      let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs", {post});
})

app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
   
    
})
app.listen(port , ()=>{
    console.log("App is listening on", port);
})

