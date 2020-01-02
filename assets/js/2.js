window.onload = function() {
  console.log($)
  $('#q1').on("click",function() {
    console.log($('#q1'))
    $('.images2').css({
      "margin-left":'0'
    })
  })
  $('#q2').on("click",function() {
    console.log($('#q2'))
    $('.images2').css({
      'margin-left':'-300px'
    })
  })
  $('#q3').on("click",function() {
    $('.images2').css({
     'margin-left':'-600px'
    })
  })
}