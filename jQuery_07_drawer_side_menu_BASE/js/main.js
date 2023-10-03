$(function(){
    var $aside = $('aside'), 
        $button = $('aside').find('button'),
        $duraction = 300;

    //(1)버튼을 클릭하면 aside 나오도록 해주세요
    
    /*
    자바스크립트 버전 
    선택자.classList.add = 'open'
    선택자.classList.remove = 'close'
    */
    
    /*
    jQuery 버전
    A.addClass('b');
    A.removeClasS('b');
    A.toggleClasS('b);
    A.hasClass('b') 조건문에서만 사용, a요소의라는 클래스 있으면 true, 없으면 false;
    */
    
    $button.click(function(){
        
        // $aside.stop().animate({left:'0px'},$duraction)
        // (1) 문제는 버튼을 하나 가지고 들어가고, 나가고를 해야합니다.
        //     버튼하나가지고 일을 하려면 구별해줄게 필요합니다.
        //      aside에다가 class를 추가해야합니다. 
        $aside.toggleClass('open');

        if($aside.hasClass('open')){
            //$aside.stop().animate({left:'-70px'}, $duraction, 'easeOutBack');
            $button.find('img').attr('src', 'img/btn_close.png');
        }else{
            //$aside.stop().animate({left:'-350px'}, $duraction, 'easeInBack');
            $button.find('img').attr('src', 'img/btn_open.png');
        }
        
        // (2) <img src="img/btn_open.png"> 이
        //     <img src="img/btn_close.png"> 로 바뀌어야 합니다.
        // 속성변경하기 , 속성의 값을 반환하기
        // var c =  A.attr('href') : a라는 요소의 b라는 속성의 값이 뭔지 알아야 한다.
        // console.log($button.find('img').attr('src'));
        // A.attr('b', 'c') a라는 요소의 b라는 속성의 값을 c로 변경 

    });



})