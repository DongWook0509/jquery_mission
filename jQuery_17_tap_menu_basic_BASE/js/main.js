$(function () {
    var tabAnchor = $('.tabs-nav li a'),
        tabPanel = $('.tabs-panel');
    
    //링크를 클릭하면 할일 
    tabAnchor.click(function(e){
        e.preventDefault();

        tabAnchor.removeClass('active'); //모두빼고
        $(this).addClass('active');      //그 요소만 추가 

        //그 요소만 active를 추가하고 나머지 요소에는 빼는 방법
        //siblings();

        tabPanel.hide();
        //Work 01 클릭하면 $('#work01').show();
        //Work 02 클릭하면 $('#work02').show();
        //Work 03 클릭하면 $('#work03').show();
        //var c = A.attr('href');
        var $target = $(this).attr('href'); 
        console.log($target);

        $($target).show();

        
    });
});

