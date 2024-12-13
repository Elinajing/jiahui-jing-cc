var menu = document.querySelector(".menu")
menu.addEventListener("click", function () {
  document.querySelector(".mask").style.display = 'flex'
})

var close = document.querySelector(".close")
close.addEventListener("click", function () {
  document.querySelector(".mask").style.display = 'none'
})