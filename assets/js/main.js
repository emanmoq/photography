jQuery(function ($) {



    $(window).scroll(function () {
      
        scrollTop = $(window).scrollTop();

        if (scrollTop > $('header').height()) {
            $('header.innerHeader').addClass('scrollNav');
        }

        else {
            $('header.innerHeader').removeClass('scrollNav');
        }    
    });   
    $('.heroSlider').owlCarousel({
      autoplay: true,
      loop: true,
      items:1,
      dotsContainer: '.sliderDots',
    });
    $('.opinionsCar').owlCarousel({
      autoplay: true,
      loop: true,
      items:1,
      nav:true,
      navText : ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    });
    $('.ourTeam').owlCarousel({
      autoplay: true,
      loop: true,
      margin:5,
      responsive:{
        0:{
          items:1,
          margin:0,
        },
        600:{
          items:2,
          margin:2,
        },
      1000:{
          items:3,
          margin:5,
        },
        1200:{
          items:4
        },
      },
      nav:true,
      navText : ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    });
    $('.sliderDots').on('click', 'li', function(e) {
     $(".heroSlider").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $(".menuicon").click(function(){
      $(".Menu").css("display","block");
      $(".Menu").animate({
        opacity: "1",
     
    },200);
  
    });
    $(".close").click(function(){
      $(".Menu").animate({
        opacity: "0",
     
    },500);
      $(".Menu").css("display","none");

  
    });
     });

