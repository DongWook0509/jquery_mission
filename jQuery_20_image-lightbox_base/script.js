var $button = $('.gallery a'),
    $target = $('#lightbox-overlay'),
    $targetImg = $target.find('img');

    /*
    $button을 클릭하면
    클릭된 그 요소의 속성명 data-lightbox의 값을 변수명 newImg 저장
    #lightbox-overlay에 클래스명 visible 추가 
    #lightbox-overlay img 요소의 src 속성의 값을 newImg 변경
    */

    $button.click(function(e){
        e.preventDefault();
        var newImg = $(this).find('img').attr('data-lightbox');

        $target.addClass('visible');
        $targetImg.attr('src', newImg);
        console.log(newImg);
    });

    $target.click(function(){
        $(this).removeClass('visible');
    });