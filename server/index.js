const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const { user: User, url: Url, user } = require('./db');
const app=express();
const {jwtAuthMiddleware,gentoken}=require('./jwt');
require('dotenv').config();
var shortUrl = require("node-url-shortener");



app.use(cors({
    origin: 'https://shorten-link-git-my-new-branch-kshitijjjs-projects.vercel.app' // Allow requests from your frontend domain
  }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* Sign up route */
app.post("/signup",async (req,res)=>{
    const {name,email,password}=req.body;
    console.log(req.body);

        try {
        const user=await User.findOne({email});

        if(user){
            console.log("User already exists ! Please login")
        }
        const newuser=new User({name,email,password});
        await newuser.save();

        const token=gentoken({ id: newuser._id, email: newuser.email });
        console.log("Token is : ",token);

        res.status(200).json({message:"New User Created successfully",token:token,name:newuser.name,email:newuser.email});


        }
        catch(err){
            console.log(err);
        }
});


/* login route */
app.post("/login",async (req,res)=>{
    const {email,password}=req.body;

    try {
        const loginUser=await User.findOne({email});
        if(!loginUser){
            console.log("Email does not exists create account !!")
        }
        const isPass=loginUser.comparePassword(password);
        if(isPass){
            const token=gentoken({id:loginUser._id,password:loginUser.password});
            console.log("Token is :",token);
            console.log("HO gya login");
            console.log(User);
            console.log(Url);
            res.status(200).json({message:"User login successfully",token:token,name:loginUser.name,email:email});
            
            
        }
        else{
            console.log("wrong pass");
            res.status(404).json("wrong password");
            
        }
    } catch (error) {
        console.log(error);
    }
})

/* Loggedin user info */
app.get('/user', jwtAuthMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // Exclude password from response
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user.id);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.get("/",jwtAuthMiddleware ,async (req,res)=>{
    try {
        const data=await User.find();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json(error)
    }
    
})

/* Slinkify route */
app.post('/shortenlink',jwtAuthMiddleware,async (req,res)=>{
    const {inputLink}=req.body;
    try {
        shortUrl.short(inputLink,(err,url)=>{
            const shortenUrl=url;
            const now = new Date();

            // Extract year, month, and day
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
            const day = String(now.getDate()).padStart(2, '0');
            
            // Format as YYYY-MM-DD
            const formattedDate = `${year}-${month}-${day}`;
            const savedUrl=new Url({userId:req.user.id,inputUrl:inputLink,shortenUrl:shortenUrl,createdAt:formattedDate,clicks:0});
            savedUrl.save();
            
            res.status(200).json({message:"Link added successfully",inputUrl:inputLink,shortenUrl:shortenUrl,clicks:savedUrl.clicks})
        })

    } catch (error) {
        console.log(error);
    }
})

/* History details by id  */
app.get("/shortenlink/history",jwtAuthMiddleware,async(req,res)=>{
    try {
        const userId=await Url.find({userId:req.user.id});
        console.log(userId);
        res.json(userId)
    } catch (error) {
        console.log(error);
    }
})

/* app.get("/:shortId", async (req, res) => {
    console.log("Track request received");
    const shortId = req.params.shortId;
    try {
        const shorten_link = `https://cdpt.in/${shortId}`;
        console.log(shorten_link);
        
        // Find the document by shortened URL
        const urlEntry = await Url.findOne({ shortenUrl: shorten_link });
        if (urlEntry) {
            urlEntry.clicks += 1;
            await urlEntry.save();
            res.status(200).json({ inputUrl: urlEntry.originalUrl });
        } else {
            res.status(404).send('URL not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}); */



app.listen(3001,()=>{
    console.log("Server side successfully running");
})
