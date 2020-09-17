$(document).ready(function(){
	$(".next-btn").click(function(){
		$(".slider-scroll").css("left", "-1480px");
	})

	$(".prev-btn").click(function(){
		$(".slider-scroll").css("left", "0px");
	})

});


 $(window).each(function(){
 	$(this).on("scroll", function() {
            if($(window).scrollTop() > 3500) {
                  $("#progress-bar").addClass('my-progress-bar');
            }

            else {
                  $('#progress-bar').removeClass('my-progress-bar');
            }
      });
 })

  $(window).each(function(){
 	$(this).on("scroll", function() {
            if($(window).scrollTop() > 3500) {
                  $("#progress-bar1").addClass('my-progress-bar');
            }

            else {
                  $('#progress-bar1').removeClass('my-progress-bar');
            }
      });
 })


   $(window).each(function(){
 	$(this).on("scroll", function() {
            if($(window).scrollTop() > 3500) {
                  $("#progress-bar2").addClass('my-progress-bar');
            }

            else {
                  $('#progress-bar2').removeClass('my-progress-bar');
            }
      });
 })

    $(window).each(function(){
 	$(this).on("scroll", function() {
            if($(window).scrollTop() > 3500) {
                  $("#progress-bar3").addClass('my-progress-bar');
            }

            else {
                  $('#progress-bar3').removeClass('my-progress-bar');
            }
      });
 })


     $(window).each(function(){
 	$(this).on("scroll", function() {
            if($(window).scrollTop() > 3500) {
                  $("#progress-bar4").addClass('my-progress-bar');
            }

            else {
                  $('#progress-bar4').removeClass('my-progress-bar');
            }
      });
 })


      $(window).each(function(){
 	$(this).on("scroll", function() {
            if($(window).scrollTop() > 3500) {
                  $("#progress-bar5").addClass('my-progress-bar');
            }

            else {
                  $('#progress-bar5').removeClass('my-progress-bar');
            }
      });
 })

// category select

$(document).ready(function(){
      $(".all-btn").click(function(){
            $(".all").removeClass("d-none");
            $(".e-commerce").addClass("d-none");
      });
});


$(document).ready(function(){
      $(".ecommerce-btn").click(function(){
            $(".e-commerce").removeClass("d-none");
            $(".all").addClass("d-none");
      });
});