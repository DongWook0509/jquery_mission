/*
    (1) 내용추가(삽입)
    - A.append(B)
    : A요소의 내용의 뒤에 B를 '추가'
    : B가 body에 있는 태그면 '이동'
    
    - A.appendTo(B)
    : B요소의 내용의 뒤에 A를 추가(이동)
    
    - A.prepend(B)
    : 내용의 앞에 

    - A.prependTo(B)
    : 내용의 앞에 
    
    (2) 내용복사
    $('선택자').clone();

    (3) offset().top
    (3-1) 내용의 높이 

*/
$(function () {
    var $window = $(window),
        $header = $('.page-header'),
        //내용(contnet),복사(clone)
        $headerClone = $header.contents().clone(),
        //<div class= "page-header-clone"></div> 자체를 선택을 할 수 있어야 합니다.
        $headerCloneContainer = $('<div class= "page-header-clone"></div>'),
        $threshold = $header.offset().top + $header.outerHeight();

    //A.append(B)
    $headerCloneContainer.append($headerClone);

    //innerHTML에 복사본이 들어있는걸 확인 
    console.log($headerCloneContainer);

    //A.appendTo(B) 
    //$headerCloneContainer를 body의 내용 뒤에다가 넣겠습니다.
    $headerCloneContainer.appendTo('body');

    //$.throttle(1000/15 라이브러리 추가
    $(window).scroll($.throttle(1000/15, function(){
        if($(this).scrollTop() >= $threshold) {
            $headerCloneContainer.addClass('visible');
        }else{
            $headerCloneContainer.removeClass('visible');
        }
    }));
});
