const express = require("express");
const addAuthorRouter = express.Router();
addAuthorRouter.use(express.json());
addAuthorRouter.use(express.urlencoded({ extended : true}));
function router(nav)
{
    addAuthorRouter.get('/add-authors',(req,res)=>{
        res.render('add-authors',
        {
            nav,
            title:'Library'
        });
    });
    addAuthorRouter.post('/add-authors',(req, res)=>{
        res.redirect('add-authors');
    });
    return addAuthorRouter;
}
module.exports = router;
