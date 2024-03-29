//網頁匯入時，就會被執行，設定slideIndex變數，紀錄接下來要顯示的位置，執行showSlides(n)
let slideIndex = 1;
showSlides(slideIndex);
//當左右移動鍵被碰到，就會執行，往左是-1，往右是+1
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//觸及圓點後，會執行這個變數，slideIndex等於圓點的位置，執行showSlides(n)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	//設定會用到變數，i迴圈用的，slides抓每一個圖片的區塊，dots每一個點點
	let i;
  	let slides = document.getElementsByClassName('mySlideshows');
  	let dots = document.getElementsByClassName('dot');
	//設定只要超過輪播圖片的數量，就回到最初或是最後
  	if (n > slides.length) {slideIndex = 1} //設定只要現在超過輪播圖片最後一張，設定回到第一張
  	if (n < 1) {slideIndex = slides.length} //小於第一張就會回到最後一張
	//將CSS中圖片區塊的display取消
  	for (i = 0; i < slides.length; i++) { 
    	slides[i].style.display = 'none';
  	}
	//清除所有圓點按鈕的'.active'
  	for (i = 0; i < dots.length; i++) { 
    	dots[i].className = dots[i].className.replace(' active', '');
  	}
	//將要出現的圖片顯示，以及現在停留在哪一張圖的圓點變色
  	slides[slideIndex-1].style.display = 'block';
  	dots[slideIndex-1].className += ' active';
}