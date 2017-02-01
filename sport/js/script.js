var Menu = {
	
	init: function() {
		if($(window).width() < 760) {
			$(".toOpen").on("click", function(event){
				event.stopPropagation();
				$(this).hide();
				$(".toClose").css("display", "block");
				$(".menu").fadeIn(1000);
				$("header").animate({height: "50em"}, 500);			
			});
			$(".toClose").on("click", function(){
				$(this).hide();
				$(".toOpen").css("display", "block");
				$(".menu").fadeOut(1500);
				$("header").animate({height: "17em"}, 1200);
			});			
		
		$(document).on("click", function(){
				$(".menu").fadeOut(1500);
				$("header").animate({height: "17em"}, 1200);
		});			
			
		} else if($(window).width() < 1024) {
			$(".toOpen").on("click", function(event){
				event.stopPropagation();
				$(this).hide();
				$(".toClose").css("display", "block");
				$(".menu").fadeIn(1000);
				$("header").animate({height: "15em"}, 500);			
			});
			$(".toClose").on("click", function(){
				$(this).hide();
				$(".toOpen").css("display", "block");
				$(".menu").fadeOut(1500);
				$("header").animate({height: "7em"}, 1200);
			});

			$(document).on("click", function(){
				$(".menu").fadeOut(1500);
				$("header").animate({height: "7em"}, 1200);
			});
		}
		
		
	}
	
};

$(document).ready(function(){	
	Menu.init();
});