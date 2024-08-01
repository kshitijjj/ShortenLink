const jwt=require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET="mayank07";


const jwtAuthMiddleware=(req,res,next)=>{

    const authorization=req.headers.authorization;
    if(!authorization) return res.status(401).json({error:"invalid token"});
    const token=req.headers.authorization.split(' ')[1];
    if(!token) return res.status(404).json({error:"Unauthorized"});

    

    try {
        //verify the jwt token
        const decoded=jwt.verify(token,JWT_SECRET);

        req.user=decoded;
        next();
    } catch (error) {
        console.log(error);

    }
}

//fucntion to generate token
const gentoken=(userData)=>{
    return jwt.sign(userData,JWT_SECRET);
}

module.exports={jwtAuthMiddleware,gentoken};
