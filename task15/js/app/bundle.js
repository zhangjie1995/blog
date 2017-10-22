/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// define(['jquery','goTop','carousel','waterfall'],function($,goTop,carousel,waterfall){
//   console.log(123)
//   new goTop()
//   new carousel($('.ct'))
//   console.log(waterfall)
//   new waterfall($('.waterImg'))
// })


var goTop = __webpack_require__(1).gotop
var carousel = __webpack_require__(2).carousel
var waterfall = __webpack_require__(3).waterfall
console.log(123)
new goTop()
new carousel($('.ct'))
console.log(waterfall)
new waterfall($('.waterImg'))


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// define(['jquery'],function($){
//   function Gotop(){
//     this.init()
//   }
//   Gotop.prototype.init = function(){
//     var $topBtn = $('<div></div>').text('回到顶部').css({
//             display: "none",
//             position:"fixed",
//             bottom: "20px",
//             right: "0",
//             width: "20px",
//             height: "100px",
//             background: "#fed136",
//             color: "#fff",
//             cursor: "pointer"
//             })
//     $topBtn.on("click",function(){
//       $(window).scrollTop(0)
//     }) 
    
//     $('#header').append($topBtn)
//     console.log($topBtn)
//     $(window).on('scroll',function(){
//       if($(window).scrollTop() != 0){
//         $($topBtn).css({display: "block"})
//       }else {
//         $($topBtn).css({display: "none"})
//       }
//     })
  
//   }
//   return (function(){
//     return Gotop
//   })()
// })



function Gotop(){
  this.init()
}
Gotop.prototype.init = function(){
  var $topBtn = $('<div></div>').text('回到顶部').css({
          display: "none",
          position:"fixed",
          bottom: "20px",
          right: "0",
          width: "20px",
          height: "100px",
          background: "#fed136",
          color: "#fff",
          cursor: "pointer"
          })
  $topBtn.on("click",function(){
    $(window).scrollTop(0)
  }) 
  
  $('#header').append($topBtn)
  console.log($topBtn)
  $(window).on('scroll',function(){
    if($(window).scrollTop() != 0){
      $($topBtn).css({display: "block"})
    }else {
      $($topBtn).css({display: "none"})
    }
  })
}

module.exports = {gotop:Gotop}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// define(['jquery'],function($){

//   function Carousel($ct){
//     this.$ct = $ct
//     this.init()
//     this.bindFunction()
//   }
//   Carousel.prototype.init = function(){
    
//     var $imgCt = this.$imgCt = this.$ct.find('.imgs')
//         $preBtn = this.$preBtn = this.$ct.find('.preBtn')
//         $nextBtn = this.$nextBtn = this.$ct.find('.nextBtn')
//         $index = this.$index = this.$ct.find('.index')
    
//     var $firstImg = this.$firstImg = $imgCt.find('li').first()
//         $lastImg = this.$lastImg =$imgCt.find('li').last()

//     this.curIndex = 0
//     this.imgCount = $imgCt.children().length
//     this.isAnimate = false

//     $imgCt.prepend($lastImg.clone())
//     $imgCt.append($firstImg.clone())

//     $imgCt.width($firstImg.width()*$imgCt.children().length)
//     $imgCt.css({
//       left: '-1920px'
//     })
//   }
//   Carousel.prototype.bindFunction = function(){
//     var _this = this
//     this.$preBtn.on('click',function(e){
//       e.preventDefault()
//       _this.playPre()
//     })
    
//     this.$nextBtn.on('click',function(e){
//       e.preventDefault()
//       _this.playNext()
//     })
//   }
//   Carousel.prototype.playPre = function(){
//     var _this = this
//     if(this.isAnimate) return ;

//     this.isAnimate = true
//     this.$imgCt.animate({
//       left:'+=1920px'
//     },function(){
//       _this.curIndex--
//       if(_this.curIndex < 0){
//         _this.$imgCt.css('left',-(_this.imgCount* _this.$firstImg.width()))
//         _this.curIndex = _this.imgCount - 1
//       }
//       _this.isAnimate = false
//       _this.setBullet()
//     })

//   }
//   Carousel.prototype.playNext = function(){
//     var _this = this
//     if(this.isAnimate) return;

//     this.isAnimate = true
//     this.$imgCt.animate({
//       left:'-=1920px'
//     },function(){
//       _this.curIndex++
//       if(_this.curIndex === _this.imgCount){
//         _this.$imgCt.css('left','-1920px')
//         _this.curIndex = 0
//       } 
//       _this.isAnimate = false
//       _this.setBullet()
//     })
  
//   }
//   Carousel.prototype.setBullet = function(){
//     this.$index.children().removeClass('active')
//                           .eq(this.curIndex).addClass('active')
//     console.log(this.curIndex)
//   }

//   return Carousel
// })

  
function Carousel($ct){
  this.$ct = $ct
  this.init()
  this.bindFunction()
}
Carousel.prototype.init = function(){
  
  var $imgCt = this.$imgCt = this.$ct.find('.imgs')
      $preBtn = this.$preBtn = this.$ct.find('.preBtn')
      $nextBtn = this.$nextBtn = this.$ct.find('.nextBtn')
      $index = this.$index = this.$ct.find('.index')
  
  var $firstImg = this.$firstImg = $imgCt.find('li').first()
      $lastImg = this.$lastImg =$imgCt.find('li').last()

  this.curIndex = 0
  this.imgCount = $imgCt.children().length
  this.isAnimate = false

  $imgCt.prepend($lastImg.clone())
  $imgCt.append($firstImg.clone())

  $imgCt.width($firstImg.width()*$imgCt.children().length)
  $imgCt.css({
    left: '-1920px'
  })
}
Carousel.prototype.bindFunction = function(){
  var _this = this
  this.$preBtn.on('click',function(e){
    e.preventDefault()
    _this.playPre()
  })
  
  this.$nextBtn.on('click',function(e){
    e.preventDefault()
    _this.playNext()
  })
}
Carousel.prototype.playPre = function(){
  var _this = this
  if(this.isAnimate) return ;

  this.isAnimate = true
  this.$imgCt.animate({
    left:'+=1920px'
  },function(){
    _this.curIndex--
    if(_this.curIndex < 0){
      _this.$imgCt.css('left',-(_this.imgCount* _this.$firstImg.width()))
      _this.curIndex = _this.imgCount - 1
    }
    _this.isAnimate = false
    _this.setBullet()
  })

}
Carousel.prototype.playNext = function(){
  var _this = this
  if(this.isAnimate) return;

  this.isAnimate = true
  this.$imgCt.animate({
    left:'-=1920px'
  },function(){
    _this.curIndex++
    if(_this.curIndex === _this.imgCount){
      _this.$imgCt.css('left','-1920px')
      _this.curIndex = 0
    } 
    _this.isAnimate = false
    _this.setBullet()
  })

}
Carousel.prototype.setBullet = function(){
  this.$index.children().removeClass('active')
                        .eq(this.curIndex).addClass('active')
  console.log(this.curIndex)
}

module.exports = {carousel:Carousel}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);