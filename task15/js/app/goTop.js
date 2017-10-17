define(['jquery'],function($){
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
  return (function(){
    return Gotop
  })()
})