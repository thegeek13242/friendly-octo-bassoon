const router = require("express").Router()
const passport = require("passport");

router.get("/success", (req,res)=>{
    if(req.user){
        res.status(200).json({
            success: true,
            message: "Login Successful",
            user: req.user,
            cookies: req.cookies
        });
    }
});

router.get("/failed", (req,res)=>{
    res.status(401).json({
        success: false,
        message: "Unable to Login"
    });
});

router.get("/logout", (req,res)=>{
    req.logout();
    res.redirect("http://localhost:3000");
})

router.get("/google", passport.authenticate("google", { scope: ["profile"]}));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/admin",
    failureRedirect: "/failed"
}))

module.exports = router