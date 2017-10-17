define(['jquery','goTop','carousel','waterfall'],function($,goTop,carousel,waterfall){
  console.log(123)
  new goTop()
  new carousel($('.ct'))
  console.log(waterfall)
  new waterfall($('.waterImg'))
})