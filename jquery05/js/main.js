/*시간을 먼저 정한다.
  앞에다가 달러$를 사용해서 변수명의 중복을 피한다.
*/

$(function(){
    var $duration = 300;
    var $image = $('#images p');

    //첫번째 캡션, span animate 메서드 
    /* $('#images p').mouseover를 안쓰려고  */

    /*
    공백 o = find
    공백 x = filter
    #images p span { }   -> $image.find('span')
    #images p.strong { } -> $image.filter('strong')
    
    선택자.animate({속성:값 , 속성:값}, 시간, 이징 , 다른 할일)
    */
   
   /*p에 마우스를 올리면 strong하고 span의 opacity를 1로 바꾸는 작업을 해야한다.*/
   /* $(this).find('span').animate({opacity:1},$duration);
      $(this).find('strong').animate({opacity:1},$duration); 
   */
   $image.mouseover(function(){
        $(this).find('span, strong').animate({opacity:1}, $duration);
   })
   .mouseout(function(){
        $(this).find('span, strong').animate({opacity:0}, $duration);
   })

   // #images p:nth-child(2) -> 공백이 없음 
   // $image.filter(':nth-child(2)')
   // stop : 하던일을 멈추고 
    $image.filter(':nth-child(2)').mouseover(function(){
        $(this).find('span').stop(true).animate({opacity:1}, $duration);
        $(this).find('strong').stop(true).animate({opacity:1,left:'0%'}, $duration);
    })
    .mouseout(function(){
        $(this).find('span').stop(true).animate({opacity:0}, $duration);
        $(this).find('strong').stop(true).animate({opacity:0,left:'-200%'}, $duration);
    })


    $image.filter(':nth-child(3)').mouseover(function(){
        $(this).find('span').stop(true).animate({opacity:1}, $duration);
        $(this).find('strong').stop(true).animate({opacity:1, bottom:0}, $duration);
        $(this).find('img').stop(true).animate({top:'-40px'}, $duration);
    })
    .mouseout(function(){
        $(this).find('span').stop(true).animate({opacity:0}, $duration);
        $(this).find('strong').stop(true).animate({opacity:1, bottom:'-80px'}, $duration);
        $(this).find('img').stop(true).animate({top:'0px'}, $duration);
    })
});