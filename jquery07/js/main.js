$(function(){
    var $aside = $('aside'),
    //var $button = $('aside button'),
        $button = $aside.find('button'),
        $duraction = 300; //0.3초

        //버튼을 클릭하면 aside 나오도록 해주세요 
        /*
        자바스크립트 버전
        선택자.classList.add = 'open';
        */
        //선택자.classList.add = 'open';
        //A.addClass('b c'); A.removeClass('b'); A.toggleClass('b');
        //A.hasClass('b') 조건문에서만 사용. a요소에 b라는 클래스
        //있으면 true, 없으면 false

        //A.hasClass('b) 조건문에서만 사용. a요소에 b라는 클래스 
        //있으면 true, 없으면 false

        //속성을 변경하기, 속성의 값을 반환하기 
        //var c = A.attr('src') => a라는 요소의 b라는 속성의 값을 변수명 c에 저장
        //A.attr('b','c') a라는 요소의 b라는 속성의 값을 c로 변경

        //jQuery animate -> cpu // 두뇌까지 가야함 //리소스를 많이 잡아 먹음 //저가는 안됨
        //css transition은 -> gpu // 비디오카드 

        console.log($button.find('img').attr('src'));

        $button.click(function(){
            // $aside.addClass('open');
            $aside.toggleClass('open');
            //$aside.stop().animate({left:'0px'}, $duraction);
            if($aside.hasClass('open')){
                $aside.stop().animate({left:'-70px'}, $duraction, 'easeOutBack');
                $button.find('img').attr('src', 'img/btn_close.png');
            }else{
                $aside.stop().animate({left:'-350px'}, $duraction, 'easeInBack');
                $button.find('img').attr('src', 'img/btn_open.png');
            }
        });
})