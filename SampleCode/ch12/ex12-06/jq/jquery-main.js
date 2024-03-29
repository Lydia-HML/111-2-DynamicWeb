//圖片輪播
$(function(){
	var showArr =['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg']; //圖片陣列
	setInterval(function(){	//定時更换背景
		$("header").css("backgroundImage","url("+showArr[fRandomBy(0,4)]+")");
	},2500);
	function fRandomBy(under, over){ //設定隨機數的範圍
		switch(arguments.length){ 
			case 1: return parseInt(Math.random()*under+1); 
			case 2: return parseInt(Math.random()*(over-under+1) + under); 
			default: return 0; 
		} 
	}
});

//TOP按鈕
$(function(){
	   $("#myTop").click(function(){	    //按下top的事件處理
		jQuery("html,body").animate({scrollTop:0},1000);
	});
	$(window).scroll(function() {     //下滑到300時，就出現top按鈕
		  if ( $(this).scrollTop() > 200){
			$('#myTop').fadeIn();
		  } else {
			$('#myTop').fadeOut();
		  }
	});
});

//疊加效果
$(document).ready(function(){
	$(".card").hover(function(){
	  $(this).css("background-color", "#f0f0f0");
	  }, function(){
	  $(this).css("background-color", "white");
	});
  });

  $(document).ready(function() {
    $(".image-frame").hover(function(){
		$(".image-caption",this).slideToggle("slow");
	}, function(){
		$(".image-caption",this).slideToggle("slow");
    });
});
