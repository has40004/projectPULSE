$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            speed: 1200,
            // adaptiveHeight: true,
            autoplay: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="prev"></button>',
            nextArrow : '<button type="button" class="slick-next"><img src="icons/right.svg" alt="next"></button>',
            responsive:[
                {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
            ]
          }
    );
  });