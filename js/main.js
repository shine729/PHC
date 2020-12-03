'use strict';

$(document).ready(function() {
    preventDefaultAnchor();
});

function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
    });
};


// 버튼누르면 맨 위로 스크롤
const arrowUp = document.querySelector('.arrow_up')
arrowUp.addEventListener('click',() => {
    scrollIntoView('#visual')
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}


// #cont1 a태그 누르면 element요소가 나타남 
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