'use strict';

$(document).ready(function() {
    preventDefaultAnchor();
});

function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
    });
};



// #cont1 버튼 누르면 선택요소가 나타남 
$('div.cont1_right ul li a').on('click',function(){
    var index = $('div.cont1_right ul li').index($(this).parent());
    // alert(index);
    $('div.cont1_left ul li').removeClass('visible');
    $('div.cont1_left ul li:eq('+index+')').addClass('visible');  
    $('div.cont1_center ul li').removeClass('visible');
    $('div.cont1_center ul li:eq('+index+')').addClass('visible'); 
    $('div.cont1_right ul li').removeClass('on');
    $('div.cont1_right ul li:eq('+index+')').addClass('on'); 
});

$('ul.cont2_box li a').on('click',function(){
    var index = $('ul.cont2_box li').index($(this).parent());
    $('ul.cont2_box li').removeClass('on');
    $('ul.cont2_box li:eq('+index+')').addClass('on'); 
    $('div.cont2_txt').removeClass('on');
    $('div.cont2_txt:eq('+index+')').addClass('on'); 
    $('div.cont2_imgbox').removeClass('on');
    $('div.cont2_imgbox:eq('+index+')').addClass('on'); 
})

$('.arrow_up').on('click',function(){
  $('html,body').animate({scrollTop:0},400);
  return false;
})

// 자동슬라이드
var numSlide = $('#visual .visual_box').length;
var slideNow = 0;
var slidePrev = 0;
var slideNext = 0;
var firstSlide = 1;
var timerId = '';
var isTimerOn = true;
var timerSpeed = 3000;


$('#visual .visual_box').each(function(i) {
  $('#visual .container .indicator').append('<li><a href="#">' + (i + 1) + '번 슬라이드</a></li>\n');
});


if (isTimerOn === true) {
  $('#visual p.control a.play').addClass('on');
} else {
  $('#visual p.control a.play').removeClass('on');
}

showSlide(firstSlide);

$('#visual .container .indicator li a').on('click', function() {
  var index = $('#visual .container .indicator li').index($(this).parent());
  showSlide(index + 1);
});

$('#visual p.control a.prev').on('click', function() {
  showSlide(slidePrev);
});

$('#visual p.control a.next').on('click', function() {
  showSlide(slideNext);
});

$('#visual p.control a.play').on('click', function() {
  if (isTimerOn === true) {
    clearTimeout(timerId);
    $(this).removeClass('on');
    isTimerOn = false;
  } else {
    timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
    $(this).addClass('on');
    isTimerOn = true;
  }
});

function showSlide(n) {
  clearTimeout(timerId);
  $('#visual .visual_box').css({'display': 'none'});
  $('#visual .visual_box:eq(' + (n - 1) + ')').css({'display': 'block'});
  $('#visual h2').removeClass('on');
  $('#visual h2:eq(' + (n - 1) + ')').addClass('on');
  $('#visual .container .indicator li').removeClass('on');
  $('#visual .container .indicator li:eq(' + (n - 1) + ')').addClass('on');

  slideNow = n;
  slidePrev = (n <= 1) ? numSlide : n - 1;
  slideNext = (n >= numSlide) ? 1 : n + 1;
  if (isTimerOn === true) {
    timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
  }
}


// 메뉴바 mobile서브메뉴 마우스오버 
$(document).ready(function () {  
    $(".menu_btn").on("click", function () {
      $(".menu_bar").css("display", "block");
    });

    $(".m_close").on("click", function () {
        $(".menu_bar").css("display", "none");
      });
      
    showMenu();
  
    function showMenu() {
      if ($(window).outerWidth() > 1300) {
        $("#mainnav > li").on("mouseover", function () {
          $(this).find(".submenu").stop().slideDown();
        });
        $("#mainnav > li").on("mouseleave", function () {
          $(this).find(".submenu").stop().slideUp();
        });
      } else {
        $("#mainnav > li").unbind();
        // $(".sub_menu").css("display", "none");
      }
    }
  });

  window.onresize = function () {
    if ($(window).width() > 1300) {
      $(".menu_bar").css("display", "none");
    } 
  };


  
  $(".menu_bar .m_list > li > .has").click(function(){
    var submenu = $(this).next(".sub2");
    if(submenu.is(":visible")){
      submenu.slideUp();
      $(this).css({"background-image":"url(img/plus.png)"})
    }else{
      submenu.slideDown();
      $(this).css({"background-image":"url(img/minus.png)"})
    }
  })




  var swiper = new Swiper('.swiper-container3', {
    loop: false,
    slidesPerView: 1.5,
    spaceBetween: 25,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
      slidesPerView: 2.5,
      simulateTouch:true,
      },
      1300: {
      slidesPerView: 3,
      simulateTouch:true,
      }
    }
  });

