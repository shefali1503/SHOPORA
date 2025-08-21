//creating middleware for fetch user
const fetchUser = async(res,req,next)=>{
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"Please authenticate using valid token"})
        }
    }
}

//creating endpoint for adding products in cartdata
app.post('/addtocart',fetchUser,async(req,res)=>{
    console.log(req.body,req.user);
})