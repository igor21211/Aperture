$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        animateOut:'slideOutUp',
        animateIn:'slideInUp',
        navText: ['', ' '],
        nav:false,
        dots:true,  
        responsive:{
            768:{
                items:3
            },
            1100:{
                items:5
            }
        }
    });
  });


