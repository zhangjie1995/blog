define(['jquery'],function($){

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

  return Carousel
})