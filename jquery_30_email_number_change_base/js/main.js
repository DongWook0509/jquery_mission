/*
(1)<input type="text" class="email_domain" value="">에 
   비어있는 value 에 
   <option value="daum.net">daum</option> 의 value의 값을 넣어줍니다.
*/

$(function(){
    var $selectEmail = $('.select_domain'),
        $targetInput = $('.email_domain'),


        //$unitPrice = $('.unitprice').text(),
        //$unitPrice = parseInt($('.unitprice').text()),
        //$unitPrice = parseInt($('.unitprice').attr('data-unitprice'));
        //A.replace(B,C)
        $count = $('.count'),
        $currentNumber = parseInt($count.text()), //바뀐갯수의 text를 저장
        $total = $('.total');
        $unit = $('.unitprice').text();
        $unitPrice = parseInt($unit.replace(',',''));
        
    //사용자의 입력을 받아와서 값이 바뀌면 change 메소드 
    $selectEmail.change(function(){
        //사용자가 선택한 도메인을 변수명에 담겠습니다.
        var domain = $(this).val();
        console.log(domain);
        //val()안에다가 값을 써주면 값을 넣어줌
        $targetInput.val(domain);
    });

    //-1이 나온다는건 $currentNumber가 제대로 안 불러졌다는 소리입니다.
    //$currentNumber = $count.text() 값을 정수로 바꿔야 합니다.
    //parseInt(값) 값을 숫자(정수)로 변환
    $('span a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('plus')){
            //$currentNumber = $currentNumber + 1;
            $currentNumber += 1;
        }else{
            //$currentNumber = $currentNumber - 1;
            //$currentNumber가 0 이상일때만 작동을 해야합니다.
            if($currentNumber > 0) {
                $currentNumber -= 1;
            }
        }
        $count.text($currentNumber);
        var semiTotal = $unitPrice * $currentNumber;
        $total.text(semiTotal);
        
        //var total = Number(semiTotal).toLocaleString('en'); //1000단윌호 구분 (영어권)
        //$total.text(total);
        $('.number').number(true);
    });
    $('.number').number(true);
})

//JQuery Number 라이브러리 
//https://github.com/customd/jquery-number