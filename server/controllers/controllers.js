
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
    db.query(delsql,,(err,result)=>{
      if(err){
          console.log(err);
      }
      console.log(result);
      
    })
  }
module.exports ={
    remove
}