const express = require("express");
const addBooksRouter = express.Router();
function router(nav)
{
    addBooksRouter.get('/add-books',(req,res)=>{
        res.render('addbooks',
        {
            nav,
            title:'Library'
        });
    });
    addBooksRouter.post('/add-books',(req,res)=>{
        res.render('addbooks',{
            nav,
            title:"Library"
        });
    });
    return addBooksRouter;
}
module.exports = router;
