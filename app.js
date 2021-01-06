const express = require("express");
const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
const nav = [
    {
        link:"/books",name:"Books"
    },
    {
        link:"/authors",name:"Authors"
    }
    ]
const booksRouter = require("./src/routes/bookRoutes")(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const userRouter = require('./src/routes/userRouters')(nav)
const addBooksRouter = require('./src/routes/addBooksRouter')(nav)
const addAuthorRouter = require('./src/routes/addAuthorRouter')(nav)
app.use(express.static('./public'));

app.use('/',userRouter);
app.use("/books",booksRouter);
app.use('/',addBooksRouter);
app.use('/authors',authorsRouter);
app.use('/',addAuthorRouter);
app.set('view engine','ejs');
app.set('views','./src/views');
app.get("/home",(req,res)=>{
    res.render("index",
    {
        nav,
        title:"Library"
    });
});
app.get('/',(req,res, next)=>{
    res.render('login',{
        title:'Library'
    });
});
const emailuser="admin@test.com";
const passworduser="12345";
app.post("/login",(req,res, next)=>{
    const body = req.body;
    if(body.email === emailuser && body.password === passworduser)
    {
        res.render('index',{
            nav,
            title:"Library",
        });
    }
    else
    {
        
        res.redirect('/');
    }
})




app.listen(5000);