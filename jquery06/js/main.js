$(function(){
    var $duraction = 300,
        $button = $('#buttons2 button');

    /* 자바스크립트 버전 
    var $buttons = document.getElementsByTagName('button');
    console.log($buttons);


    // $buttons[0].style.top = '-40px';
    // $buttons[1].style.top = '0px';
    // $buttons[2].style.top = '40px'
    // $buttons[3].style.top = '80px;

    for(var i = 0; i<=$buttons.length; i++){
        //console.log(i);
        $buttons[i].style.top = i*40 - 40 + 'px';
     }
     */

    /*
     버튼들의 높이 -40, 0 40, 80, 120 ...
     자바스크립트 요소들마다 할일
     i 0 = -40, i 1 = 0, i 2 = 40, i 3 =80
     */
    

    $button.each(function(idx){
        //선택자.css({속성:값, 속성:값})
        var newTop = idx * 40 - 40 + 'px';
        $(this).css({top:newTop});
    })
    .mouseover(function(){
        $(this).stop().animate({backgroundColor:'yellow', color:'#000'}, $duraction);
        $(this).find('img:first-child').stop().animate({opacity:0}, $duraction );
        $(this).find('img:nth-child(2)').stop().animate({opacity:1}, $duraction);
    })
    .mouseout(function(){
        $(this).stop().animate({backgroundColor:'#fff', color:'#01b169'}, $duraction);
        $(this).find('img:first-child').stop().animate({opacity:1}, $duraction);
        $(this).find('img:nth-child(2)').stop().animate({opacity:0},$duraction);
    })
})