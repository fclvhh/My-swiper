window.onload = function() {
  console.log($)
  $('#p1').on("click",function() {
    console.log($('#p1'))
    $('.images').css({
      transform:'translateX(0)'
    })
  })
  $('#p2').on("click",function() {
    $('.images').css({
      transform:'translateX(-300px)'
    })
  })
  $('#p3').on("click",function() {
    $('.images').css({
      transform:'translateX(-600px)'
    })
  })
}