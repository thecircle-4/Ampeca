var router = require('express').Router();
const controllers = require('../controllers/controllers');
//just test for pushing github
router.delete("/delete", controllers.removefrompl);
router.post("/post",(req,res)=>{
    controllers.PostSongs(req.body,(a,b)=>{
        if(a){
            console.log(a);
        }
        console.log(b);
    })
})
router.get("/get",(req,res)=>{
    controllers.GetPlaylistSong(req.body,(a,b)=>{
        if(a){
            console.log(a);
        }
        console.log(b);
    })
})

router.put("/updateplname", controllers.updateplname);
module.exports = router;
