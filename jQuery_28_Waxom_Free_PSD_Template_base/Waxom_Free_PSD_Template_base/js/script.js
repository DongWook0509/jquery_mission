$(function() {
			
        $('.posts_list').bxSlider({
            minSlides: 1,
            maxSlides: 3,
            moveSlides: 1,
            slideWidth:370,
            slideMargin : 30,
            pager:false,
            nextSelector: '.recent_posts .controls .next',
            prevSelector :'.recent_posts .controls .prev' 
        });
        
        //(0) Moblie 메뉴 드랍다운 
        $(".toggle").click(function(){
            $(".main-menu").slideToggle();
        }); 
        
        $(window).resize(function(){
            if($(window).width() > 768){
                //참이면 할일
                $(".main-menu").show();
            } else{
                //거짓이면 할일
                $(".main-menu").hide();
            }
        });				
        
       //  sticky 상단 메뉴고정 후 색깔 및 로고가 바뀌기 
       var $header = $('header');
       var $services = $('.services');

       var $counters = $('.counters');
       var $counterData = $counters.find('h3');

       /*(주의) 스크롤 바꾸로 빼는게 중요하다.*/
       var $serviceExecuted = false;
       var $counterExecuted = false;

       $(window).scroll(function(){
            var $currenSct = $(this).scrollTop();
            var $offset = 300;

            if($currenSct > 0){
                $header.addClass('sticky');
            }else{
                $header.removeClass('sticky');
            }
            //service item 나타나기 
            var $serviceThreshold = $services.offset().top - $offset;
            if(!$serviceExecuted){
                if($currenSct > $serviceThreshold){
                    $services.addClass('active');
                    $serviceExecuted = true;
                }
            }

            //숫자 에니메이션  $counters
            var $counterThreshold = $counters.offset().top - $offset;
           
            if (!$counterExecuted){
                if($currenSct > $counterThreshold){
                    $counterData.each(function(){
                        var $current = $(this);
                        var $target  = $current.attr('data-rate');
                        //(주의) $(this)로 받게 되면 animate 함수 자체를 받아드리기 때문에 틀려서 변수명 $current 로 선언을 해주었다.
                        //animate, progress, rate
                        $({rate:0}).animate({rate: $target},{
                            duration : 2500,
                            progress : function(){
                                var now = this.rate;
                                $current.text(Math.ceil(now));
                            }
                        });
                    });
                    $counterExecuted = true;
                }
            }//counterExecuted 이벤트 

       }); //스크롤 이벤트

        //overlay
        var currentUrl = $('iframe').attr('src'); // 이동한 부분입니다.

        $('.video .icon').click(function(e){
            e.preventDefault();
            $('#overlay').addClass('visible');

            var newStr = '?autoplay=1';
            var newUrl =currentUrl.concat(newStr);

            $('iframe').attr('src',newUrl);

        });
        $('.video .close').click(function(e){
            e.preventDefault();
            $('#overlay').removeClass('visible');
            $('iframe').attr('src',currentUrl);  //추가된 부분
        });

});


