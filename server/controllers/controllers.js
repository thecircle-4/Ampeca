var db= require("../DataBase/Connection.js")
//testing
const removefrompl=(req,res)=>{
  var selsql=`SELECT songs FROM playlist WHERE id = ${req.body['id']} ` 
  db.db.query(selsql,(err,result)=>{
    if(err){
        res.send("err1");
    }
    console.log(result[0]["songs"],'bef')
    var parse=JSON.parse(result[0]["songs"])
    console.log(parse,"af")
   
    for( var i = 0; i < parse.length; i++){ 
        if(parse[i] === req.body['songid']){
            parse.splice(i, 1); 
        }
    }
    parse = JSON.stringify(parse)
    var upsql=`UPDATE playlist SET songs = '${parse}' WHERE id = '${req.body['id']}' `
    db.db.query(upsql,(err,resl)=>{
        if(err){
            res.send("err2");
        }
        res.send(resl);
    }) 
  })
}
const updateplname=(req,res)=>{
    var selsql=`UPDATE playlist SET name = ?  WHERE id = ?  `   
    db.db.query(selsql,[req.body['name'],req.body['id']],(err,result)=>{
      if(err){
          console.log(err);
      }
      console.log(result);
      res.send(result);
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
var PostSongs = function(Data,callback){
    var arr = []
    arr= JSON.stringify(Data["songs"])
    db.db.query(`UPDATE   playlist SET songs = '${arr}' WHERE id =  '${Data["user"]}' ` , (err,rez)=> {
        console.log(rez)
        if(rez.affectedRows==0 ) {
             db.db.query(`INSERT INTO playlist (id , songs) VALUES ('${Data['user']}' , '${arr}')` , (err1 ,rez1)=> {
            console.log(err1 , " ",rez1)
            if(err1!==null)
                callback("Err Ha")
            else
                callback("Check Data Inserted")
            })
        }else {
        if(err!==null)
            callback("err Hapaned")
        else
            callback("Check Database")
        }   
    })
}
module.exports ={
    removefrompl,
    PostSongs,
    updateplname,
    GetPlaylistSong
}

