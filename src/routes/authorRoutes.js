const express = require("express");
const authorsRouter = express.Router();
function router(nav)
{
    var authors= [
        {
            author:"Joseph Barbera",
            book:'Tom and Jerry',
            details:'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.',
            img:"Joseph.jpg"
    
        },
        {
            author:"James Clear",
            book:'Atomic Habits',
            details:'James Clear is an author, entrepreneur, and photographer in 25+ countries. JamesClear.com is the home of his writing and work.',
            img:"JamesClear.jpg"
        },
        {
            author:"Peter Lynch",
            book:'Learn To Earn',
            details:'Peter Lynch is an American investor, mutual fund manager, and philanthropist. As the manager of the Magellan Fund at Fidelity Investments between 1977 and 1990, Lynch averaged a 29.2% annual return, consistently more than double the S&P 500 stock market index and making it the best-performing mutual fund in the world. ',
            img:"peterLynch.jpg"
        }
    ]
    authorsRouter.get("/",(req,res)=>{
        res.render("authors",
        {
            nav,
            title:"Library",
            authors
        });
    });
    authorsRouter.get("/:i",(req,res)=>{
        const i = req.params.i
        res.render("author",{
            nav,
            title:"Library",
            author: authors[i]
        })
    })
    return authorsRouter;
}
module.exports = router;