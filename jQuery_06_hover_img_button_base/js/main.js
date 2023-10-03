$(function(){
    var $duration = 300, 
        $button = $('#buttons2 button');
    
    //버튼들의 높이 -40, 0, 40, 80, 120

    //자바스크립트에서 요쇼들마다 할일
    //$buttons[0].style.top = '-40';
    //$buttons[1].style.top = '0';
    //i 0 = -40, i 1 = 0, i 2 = 40

    /* 자바스크립트 버전 
    var $buttons = document.getElementsByTagName('button');
    console.log($buttons);

    for(var i = 0; i <= $buttons.length; i++){
        $buttons[i].style.top = i*40 - 40 + 'px';
    }
    */

   /*jQuery*/
   $button.each(function(idx){
       //선택자.css({속성: 값, 속성: 값})
       $(this).css({top: idx*40 -40 + 'px'});
    })
    //2 마우스를 올리면 사진이 바뀌어야 합니다.
    .mouseover(function(){
        $(this).stop().animate({backgroundColor:'yellow', color:'#000'}, $duration);
        $(this).find('img:first-child').stop().animate({opacity:0},$duration);
        $(this).find('img:nth-child(2)').stop().animate({opacity:1},$duration);
    })
    .mouseout(function(){
        $(this).stop().animate({backgroundColor:'#fff', color : '#01b169'}, $duration);
        $(this).find('img:first-child').stop().animate({opacity:1},$duration);
        $(this).find('img:nth-child(2)').stop().animate({opacity:0},$duration);
    });
})