$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        animateOut:'slideOutUp',
        animateIn:'slideInUp',
        navText: ['', ' '],
        nav:true,
        dots:true,  
        responsive:{
            550:{
                items: 2
            },
            768:{
                items:3
            },
            1100:{
                items:5
            }
        }
    });
    $( function() {
        $( "#dialog" ).dialog({
          autoOpen: false,
          show: {
            effect: "fade",
            duration: 500
          },
          hide: {
            effect: "drop",
            duration: 500
          }
        });
     
        $( "#opener" ).on( "click", function() {
          $( "#dialog" ).dialog( "open" );
        });
      });
      $( function() {
        $( "#accordion" ).accordion();
      } );

	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});
	
})(jQuery); 
