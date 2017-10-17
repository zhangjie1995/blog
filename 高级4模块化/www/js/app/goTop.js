define(['jquery'],function($){
  function Gotop(){
    this.init()
  }
  Gotop.prototype.init = function(){
      var $topBtn = $('<div></div>').text('回到顶部').css({
              position:"fixed",
              bottom: "20px",
              right: "0",
              width: "20px",
              height: "40px",
              background: "blue",
              color: "#fff",
              cursor: "pointer"
              })
      $topBtn.on("click",function(){
        $(window).scrollTop(0)
      })
      $('.ct').append($topBtn)
      console.log($topBtn)
  }
  return (function(){
    return Gotop
  })()
})