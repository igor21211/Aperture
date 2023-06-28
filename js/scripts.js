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
  });
