app.get('/getNews',function(req,res){
  var news = ['内容4','内容5','内容6','内容7','内容8','内容9','内容10','内容11','内容12','内容13','内容14']
  var index = req.query.page
  res.send(news.slice(index))
})