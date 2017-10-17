function setRouter(app){ 
 var router = app; 

app.get('/getImg',function(req,res){
  var data = []
  var count = req.query.count
  for(var i=0;i<count;i++){
    var imgH = Math.floor(Math.random()*300)
    data[i] = imgH
  }
  res.send(data)
})}
 module.exports.setRouter = setRouter