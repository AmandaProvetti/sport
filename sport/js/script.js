var Script = {
	
	init: function() {
		if($(window).width() < 760) {
			$(".toOpen").on("click", function(event){
				event.preventDefault();
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
				event.preventDefault();
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
	},
	
	clickAndAnimate: function() {
		var diff = $("header").outerHeight();
		if($(window).width() > 700){
			$(".relative").not(".contato").css({height: $(window).height()-50, backgroundSize: "cover"});
			$(".manifesto.relative").css({height: $(window).height(), backgroundSize: "cover"})
		}
		$(".menu a, .proximo").click(function(e){
			e.preventDefault();
			var id = $(this).attr("href"),
					offset = $(id).offset().top;
			$("body").stop().animate({scrollTop: offset-diff}, "slow", "linear");
			
		});
	},
	
	backToTop: function () {
		$(".arrowUp").click(function(){
				$("body").stop().animate({scrollTop: 0}, "slow", "linear");
		});
	},
	
	modalCasesMenu: function() {
		$(".menuLateral li").click(function(){
			var caseId = $(this).attr("id");
			
			$(".casesList").removeClass("active");
			$("."+caseId).addClass("active");
		});
	},
	
	modalCasesArrows: function(){
		$(".casesToLeft").click(function(){
			var caseActive = $(".active");		  
			
			if(caseActive.prev().length > 0) {
				$(".casesList").removeClass("active");
				caseActive.prev().addClass("active");
			}
			
		});
		
		$(".casesToRight").click(function(){
			var caseActive = $(".active");		  
			
			if(caseActive.next().length > 0) {
				$(".casesList").removeClass("active");
				caseActive.next().addClass("active");
			}
			
		});
	}
};

$(document).ready(function(){	
	Script.init();
	Script.clickAndAnimate();
	Script.backToTop();
	Script.modalCasesMenu();
	Script.modalCasesArrows();
});