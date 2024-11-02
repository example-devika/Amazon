const router=require("express").Router()
const User=require("../models/usermodel")
const bcrypt=require("bcrypt")


router.post("/register",async(req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10)
        const bcryptedpassword=await bcrypt.hash(req.body.Password,salt)
        await new User({
            username:req.body.username,
            email:req.body.email,
            mobilenumber:req.body.mobilenumber,
            Password:bcryptedpassword
        }).save()
        res.send("Account Created")
    } catch (error) {
        res.status(404).send(error)
    }
})
router.get("/login",async(req,res)=>{
    try {
        const user=await User.findOne({mobilenumber:req.body.mobilenumber})
        if(!user) return res.status(404).send("user not found")
            const validpassword=await bcrypt.compare(req.body.Password,user.Password)
        if(!validpassword) return res.status(404).send("Invalidpassword")
            res.send("loggedIn")
    } catch (error) {
        res.status(404).send(error)
        
    }
})


module.exports=router
