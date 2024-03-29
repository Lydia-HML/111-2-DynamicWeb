var mybutton = document.getElementById('myTop');
//使用者往下捲動頁面到大於20px時，出現TOP按鈕
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } 
  else {
    mybutton.style.display = 'none';
  }
}
//使用者按下TOP按鈕時，回到頁面頂端
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}