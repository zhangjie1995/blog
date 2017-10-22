// define(['jquery'],function($){
//   function Waterfall($ct){
//     this.$ct = $ct
//     this.colH = []
//     this.init()
//     this.loadMore()
//   }
//   Waterfall.prototype.init = function(){
//     var $li = this.$li =this.$ct.find('li')
//     var _this = this
//     var liWidth = this.liWidth = $li.width()
//     var count = parseInt(this.$ct.width()/liWidth)
//     for(var i=0;i<count;i++){
//         _this.colH[i] = 0
//     }
//     this.layout($li)
//   } 
//   Waterfall.prototype.layout = function($li){
//     var _this = this
//     $li.each(function(){

//       var maxH 
//       var minH = Math.min.apply(null,_this.colH)
//       var minIndex = _this.colH.indexOf(minH)

//       $(this).css({
//         'left':$(this).outerWidth(true)*minIndex,
//         'top': _this.colH[minIndex]
//       })

//       _this.colH[minIndex] += $(this).outerHeight(true)
//     })
//     var maxH = Math.max.apply(null,this.colH)
//     this.$ct.css({height:maxH})
//   }
//   Waterfall.prototype.loadMore = function(){
//     var _this = this
//     $('.load-more').css({'top': $(_this).height})
//     this.$ct.find('.load-more').on('click',function(){
//       $.ajax({
//         url:'/getImg',
//         type:'get',
//         count:10
//       }).done(function(ret){
//         _this.addImg(ret)
//       })
//     })
//   } 
//   Waterfall.prototype.addImg = function(ret){
//     var newImgs = []
//     for(var i=0;i<10;i++){
//        var newImg = $('<li></li>').css({height:ret[i]})
//        newImgs.push(newImg)
//     }
//     for(var i=0;i<newImgs.length;i++){
//       this.$ct.append(newImgs[i])
//       this.layout(newImgs[i])
//     }
//   }
//   return Waterfall
// })

function Waterfall($ct){
  this.$ct = $ct
  this.colH = []
  this.init()
  this.loadMore()
}
Waterfall.prototype.init = function(){
  var $li = this.$li =this.$ct.find('li')
  var _this = this
  var liWidth = this.liWidth = $li.width()
  var count = parseInt(this.$ct.width()/liWidth)
  for(var i=0;i<count;i++){
      _this.colH[i] = 0
  }
  this.layout($li)
} 
Waterfall.prototype.layout = function($li){
  var _this = this
  $li.each(function(){

    var maxH 
    var minH = Math.min.apply(null,_this.colH)
    var minIndex = _this.colH.indexOf(minH)

    $(this).css({
      'left':$(this).outerWidth(true)*minIndex,
      'top': _this.colH[minIndex]
    })

    _this.colH[minIndex] += $(this).outerHeight(true)
  })
  var maxH = Math.max.apply(null,this.colH)
  this.$ct.css({height:maxH})
}
Waterfall.prototype.loadMore = function(){
  var _this = this
  $('.load-more').css({'top': $(_this).height})
  this.$ct.find('.load-more').on('click',function(){
    $.ajax({
      url:'/getImg',
      type:'get',
      count:10
    }).done(function(ret){
      _this.addImg(ret)
    })
  })
} 
Waterfall.prototype.addImg = function(ret){
  var newImgs = []
  for(var i=0;i<10;i++){
      var newImg = $('<li></li>').css({height:ret[i]})
      newImgs.push(newImg)
  }
  for(var i=0;i<newImgs.length;i++){
    this.$ct.append(newImgs[i])
    this.layout(newImgs[i])
  }
}
module.exports = {waterfall:Waterfall}
