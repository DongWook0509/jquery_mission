/*
#images p 태그를 기준 relative를 기준으로 
#images p strong absolute로 기준을 잡고 있습니다.
#images p span   absolute로 기준을 잡고 있습니다.

#images p span를 올리면 opacity가 0에서 1로 바뀜 
#images p strong 에 미리설정한거에 따라 바뀜 
*/

/*
  암기 
  
  공백(O) -> find
  공백(X) -> filter 
  #images p span { } -> $image.find('span') 
  #images p.strong  { } -> $images.filter('strong')

  선택자.animate({속성,값, 속성:값}, 시간, 이징, 다른할일)
*/

$(function(){
    /*정확하게 구별해주고 싶은 예약어를 만드려면 변수명에 $를 표시*/
    var $duration = 300,
        $image = $('#images p')

    //(1) 마우스를 올리면 나가면 , 첫번째 캡션, span animate 메서드
    $image.filter(':nth-child(1)').mouseover(function(){
        /*
        $(this).find('span').animate({opacity:1}, $duration);
        $(this).find('strong').animate({opacity:1}, $duration);
        */
        /* 한줄로 처리 가능합니다.*/
        $(this).find('span, strong').stop().animate({opacity:1}, $duration);
    })
    .mouseout(function(){
        $(this).find('span, strong').stop().animate({opacity:0}, $duration);
    });

    //(2) #images p:nth-child(2) 두번째 캡션, 에니메이트가 달름
    // strong : left : -200px -> left : 0; 
    // strong : opacity : 0 -> opacity : 1 로 바꿔야 합니다. 
    // $image.filter(':nth-child(2)')
    $image.filter(':nth-child(2)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, $duration);
        $(this).find('strong').stop().animate({opacity:1, left:'0%'}, $duration)
    })
    .mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, $duration);
        $(this).find('strong').stop().animate({opacity:0, left:'-200px'}, $duration);
    });

    //(3) #images p:nth-child(3) 
    //이미지도 같이 올라감 
    $image.filter(':nth-child(3)').mouseover(function(){
        $(this).find('span').stop().animate({opacity:1}, $duration);
        $(this).find('strong').stop().animate({opacity:1, bottom : 0}, $duration);
        $(this).find('img').stop().animate({top: '-40px'}, $duration);
    })
    .mouseout(function(){
        $(this).find('span').stop().animate({opacity:0}, $duration);
        $(this).find('strong').stop().animate({opacity:0, bottom:'-80px'}, $duration);
        $(this).find('img').stop().animate({top:0}, $duration);
    });
})


