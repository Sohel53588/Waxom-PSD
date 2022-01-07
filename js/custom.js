$(function () {
  // sticky header start
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
      $('.navbar').addClass('sticky_header');
    } else {
      $('.navbar').removeClass('sticky_header');
    }
  });

  // sticky header end   


  // banner slider part start
  $('.banner_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  });
  // banner slider part end

  $('.service_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,


    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

    ]

    

  });
  // swrvice slider part end


  // protfolio part stat
  var containerEl = document.querySelector('.protfolio_filter');

  var mixer = mixitup(containerEl);
  // protfolio part end


  // venobox part start
  new VenoBox({
    selector: '.my-video-links',
  });
  // venobox part end


  // countrt js part start
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  // countrt js part end

  // back to top part start
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back_to_top').fadeIn(200)
    } else {
      $('.back_to_top').fadeOut(200)
    }
  });
  //==== Animate the scroll to top
  $('.back_to_top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1000);
  });
  // back to top part end

  // blog slider part start
  $('.blog_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,

    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

    ]
  });
  // blog slider part end

  // gellary slider part start
  $('.gallary_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,

    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },

    ]
  });
  // gellary slider part end
})