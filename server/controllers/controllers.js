var db= require("../DataBase/Connection.js")
const remove=(req,res)=>{
  var delsql="SELECT FROM playlist WHERE id = ?"
  db.query(delsql,[req.body.id],(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
  })
}
const update=(req,res)=>{
    JSON.stringify
    var delsql="UPDATE playlist WHERE id = ?"
    db.query(delsql,(err,result)=>{
      if(err){
          console.log(err);
      }
      console.log(result);
      
    })
  }

// Getting The Array of Song for Specfic user 
const GetPlaylistSong = function(User , callback){
db.db.query(`SELECT songs FROM playlist WHERE id = '${User}'` , (err,rez)=>{
if(err)
callback(null)
else 
callback(rez)
})
}

// Posting a Song in Playlist Is like Updating the array in the Playlist table For Specfic user
var PostSongs= function(Data , callback){
   GetPlaylistSong(Data["user"] , function(rez){
    var arr = JSON.parse(rez)
     arr.push(Data["songs"])
     db.db.query(`UPDATE playlist SET songs='${arr}' WHERE id='${Data["user"]}'`, (err,rez)=>{
        if(err==null)
            callback(null)
        else 
            callback(rez)
        })
   }) 
}
module.exports ={
    remove,
    PostSongs
}