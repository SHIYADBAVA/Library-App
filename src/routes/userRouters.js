const express = require("express");
const { render } = require("../../../../E-commerce App/app");
const usersRouter = express.Router();
usersRouter.use(express.json());
usersRouter.use(express.urlencoded({ extended : true}));
function router(nav)
{
    usersRouter.get('/signup',(req,res, next)=>{
        res.render('signup',{
            title:'Library'
        });
    });
    usersRouter.post('/signup',(req,res)=>{
        var body = req.body;
        if(body.password === body.password2)
        {
            res.render('login',{
                title:'Library'
            });
        }
        else
        {
            res.redirect('signup');
        }
    });

    return usersRouter;
}
module.exports = router;


