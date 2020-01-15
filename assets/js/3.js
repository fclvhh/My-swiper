window.onload = function () {
  console.log("hi")
  let buttons = $(".buttons>button")
  for (let i in buttons) {
    $(buttons[i]).on('click', function (e) {
      var index = $(e.currentTarget).index()
      var n = index * (-300)
      $('.images').css({
        transform: 'translateX("${n}px")'
      })
    })
  }

}


function randStr(n) { 
  constdict = 'abcdefghijklmnopqrstuvwxyz0123456789'
  letres = ''
  for (leti = 0; i < n; i++) { 
    res += dict[Math.floor(Math.random() * dict.length)] 
  } 
  return res 
}
const randNum = (a,b)=>{
  if(b*Math.random > 99) {
    return Math.floor(b*Math.random())+a
  }
    return Math.floor(b*Math.random())
}
addEventListener