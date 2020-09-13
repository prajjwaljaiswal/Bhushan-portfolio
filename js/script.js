$(document).ready(function(){
	$(".next-btn").click(function(){
		$(".slider-scroll").css("left", "-1480px");
	})

	$(".prev-btn").click(function(){
		$(".slider-scroll").css("left", "0px");
	})

});

window.onscroll = function (){
	on_scroll();
};

function on_scroll(){
	if (window.pageYOffset) {
     var my_nav = document.getElementById("my-nav");
     my_nav.style.backgroundColor = "red !important";
  } else {
     	var my_nav = document.getElementById("my-nav");
     my_nav.style.background = "transparent !important";
  }
}