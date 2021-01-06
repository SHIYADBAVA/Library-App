const express = require("express");
const booksRouter = express.Router();
function router(nav)
{
    var books= [
        {
            title:"Tom and Jerry",
            author:"Joseph Barbera",
            genre:"Cartoon",
            published:"1949",
            Description:"Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry.",
            img:"tom-and-jerry-the-missing-mouse-DXM1G8.jpg"
    
        },
        {
            title:"Atomic Habits",
            author:"James Clear",
            genre:"Self-Development",
            published:"16 October 2018",
            Description:"Atomic Habits is the most comprehensive and practical guide on how to create good habits, break bad ones, and get 1 percent better every day. I do not believe you will find a more actionable book on the subject of habits and improvement.James Clear, one of the world’s leading experts on habit formation, is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible.",
            img:"atomichabits.jpg"
        },
        {
            title:"Learn To Earn",
            author:"Peter Lynch",
            genre:"Finance",
            published:"1995",
            Description:"Mutual-fund superstar Peter Lynch and author John Rothchild explain the basic principles of the stock market and business in an investing guide that will enlighten and entertain anyone who is high-school age or older.Many investors, including some with substantial portfolios, have only the sketchiest idea of how the stock market works. The reason, say Lynch and Rothchild, is that the basics of investing—the fundamentals of our economic system and what they have to do with the stock market—aren’t taught in school. At a time when individuals have to make important decisions about saving for college and 401(k) retirement funds, this failure to provide a basic education in investing can have tragic consequences.",
            img:"learntoearn.jpg"
        }
    ]
    booksRouter.get("/",(req,res)=>{
        res.render("books",
        {
            nav,
            title:"Library",
            books
        });
    });
    booksRouter.get("/:i",(req,res)=>{
        const i = req.params.i
        res.render("book",{
            nav,
            title:"Library",
            book: books[i]
        });
    });
    booksRouter.get('/add-books',(req,res)=>{
        res.render('addbooks',
        {
            nav,
            title:'Library'
        });
    });
    return booksRouter;
}
module.exports = router;