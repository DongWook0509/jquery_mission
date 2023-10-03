$(function(){
   var $menu = $('#top_menu ul li'),
       $contents = $('#contents > div');

   /*
   $menu를 클릭하면 해당 요소에만 클래스명 on 추가되도록
   */
  $menu.click(function(e){
   e.preventDefault();
    
   /*
   $menu.removeClass('on');
   $(this).addClass('on');
   */
   //$(this).addClass('on').siblings().removeClass();

   /*
   메뉴를 클릭을 하면 클릭한 그 녀석을 가지고 오고싶습니다.
   */
   var idx = $(this).index();
   var section = $contents.eq(idx);
   var sectionDistance = section.offset().top;

   console.log(sectionDistance);
   //A.scrollTop() 스크롤양을 확인
   //스크롤을 양을 확인하는게 아니라 스크롤양을 만들어야 합니다.
   $('html, body').stop().animate({scrollTop : sectionDistance});
  });

  /*
  윈도우 스크롤이 생기면 
  $content를 마다 할일 
  각각의 화면 상단에서의 거리  sectionDistance 보다 
  스크롤의 양이 많은지 적은지 따져야 합니다. 
  많다는 조건이 참이면 넌 ...누구니 ...? 
  각 요소마다 순번 변수명 idx 저장 
  그 순번에 해당하는 메뉴에만 클래스명 on 추가 
  */

  $(window).scroll(function(){
    $contents.each(function(){
        if($(this).offset().top <= $(window).scrollTop()){
            var idx = $(this).index();
            $menu.removeClass('on');
            $menu.eq(idx).addClass('on');
        }
    });
  });

});


