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
})

$('div.cont1_center ul li').on('click',function(){
    var index = $('div.cont1_center ul li').index($(this).parent());
    alert(index);
    // $('div.cont1_left ul li').removeClass('visible');
    // $('div.cont1_left ul li:eq('+index+')').addClass('visible');  
})


