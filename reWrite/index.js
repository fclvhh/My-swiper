// 功能:
//   1.播放下一张
//   2.波放沙上一张
//   3.自动波放
//   4.移入停止 , 移出波放
window.onload = function() {
  let $swiperWrapper = $('.swiper-wrapper')
  let $swiperContent = $('.swiper-content')
  let $buttons = $('.buttons')
  let currentIndex = 0
  let timerId = 0
  function playNextSlide() {
    console.log('hi')
    currentIndex = (currentIndex+1)%5
    $swiperContent.css({
      transform:`translateX(-${currentIndex*400}px)`
    })
  }
  function playPreviousSlide(){
    currentIndex = currentIndex-1
    if(currentIndex<0){
      currentIndex = 4
    }
    $swiperContent.css({
      transform:`translateX(-${currentIndex*400}px)`
    })  
  }
  function autoPlay() {
    timerId = setInterval(function(){
      playNextSlide()
    },3000)
  }
  function pauseAutoPlay() {
    clearInterval(timerId)
  }
  function continueAutoPlay() {
    autoPlay()
  }
  function bindButtonEvents() {
    $buttons.on('click','button',function(e){
    var index = $(e.target).index()
    switch(index) {
      case 0:
      playPreviousSlide()
      break
      case 1:
      playNextSlide()
      break
      }
    })
  }
  function bindMouseHandle() {
    $swiperWrapper.on('mouseenter',function(){
      pauseAutoPlay()
    })
    $swiperWrapper.on('mouseleave',function(){
      continueAutoPlay()
    })

  }
  function sildeInit(){
    bindButtonEvents()
    bindMouseHandle()
    autoPlay()
  }
  sildeInit()
}
