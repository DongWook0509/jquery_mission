$(function () {
    var wind = $(window),
        header = $('.page-header'),
        headerOffsetTop = header.offset().top;
        console.log(headerOffsetTop);

        /*window에 스크롤이 생기면 */
        wind.scroll(function(){
           //스크롤 양 > 화면상단에서의 거리 
           if(wind.scrollTop() >= headerOffsetTop){
                header.addClass('sticky');
           }else{ 
                header.removeClass('sticky')
           }
        })

});
