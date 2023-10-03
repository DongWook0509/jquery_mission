    
    //html이 전부로드가 되면
    /*  
        document.addEventListener('DOMContentLoaded',function(){
        document.getElementsByTagName('h1')[0].style.color='red';
        }); 
     */
    
    /*   
        $(document).ready(function(){
        }); 
    */


    //css
    //(1) h1 {color : red}
    //(2) #typo .inner {text-decoration:underline;}
    //(3) 아래쪽 5px 두께 red  #typo .inner{border-bottom}
    //(4) 45도를 돌려보세요 #typo .inner {transform: rotate(45deg);}
    //(5) 글씨의 투명도를 50% #typo .innner{opacity : 0.5;}

         /* 
        $('h1').css('color' , 'blue');
        $('#typo .inner').css('text-decoration' , 'underline');
        $('#typo .inner').css('border-bottom', '5px solid red');
        $('#typo .inner').css('transform' , 'rotate(45deg)');
        $('#typo .inner').css('opacity' , 0.5); 
        */

        /*
        $('#typo .inner').css({
            'text-decoration' : 'underline',
            'border-bottom': '5px solid red',
            'transform' : 'rotate(45deg)',
             'opacity' : 0.5
        });
        */

        /* 
        $('#typo .inner').css({
            textDecoration : 'underline',
            borderBottom: '5px solid red',
            transform : 'rotate(45deg)',
            opacity : 0.5
        });
        */

    
    /*
    h1:hover, #typo:hover {background-color:green;} css 인경우
     h1을  hover 했을때 h1만 반응하고 
    #typo 인 경우 #typo만 반응하고 싶게 하려면..?
    */

    //this :  이벤트가 일어난 그 요소 
    //this로 하면 마우스 올렸을때의 아까 그녀석
    $(function(){
        
        $('h1').css('color','red');

        //$('선택자').on('이벤트 종류' , 할일);

        $('#typo, h1').mouseover(function(){
            //아이디 type의 배경색을 green으로 해주세요
             $(this).css('background-color','green');
        })
        .mouseout(function(){
             $(this).css('background-color', '#3498db');
        }); //typo mouseout

    });

    

    /*
     $(function(){
   
        //$('선택자').on('이벤트 종류' , 할일);

        $('#typo').on('mouseover' ,function(){
            //아이디 type의 배경색을 green으로 해주세요
             $('#typo').css('background-color','green');
        }); //typo mouseover

        $('#typo').on('mouseout' ,function(){
             $('#typo').css('background-color', '#3498db');
        }); //typo mouseout

     });
    */

     /* 
      $(function(){
   
        //$('선택자').on('이벤트 종류' , 할일);

        $('#typo').on('mouseover' ,function(){
            //아이디 type의 배경색을 green으로 해주세요
             $('#typo').css('background-color','green');
        })
        .on('mouseout' ,function(){
             $('#typo').css('background-color', '#3498db');
        }); //typo mouseout

    }0);
    */

    /*
     h1:hover, #typo:hover {background-color:green;} css 인경우
     h1을  hover 했을때 h1만 반응하고 
     #typo 인 경우 #typo만 반응하고 싶게 하려면..?

    //this :  이벤트가 일어난 그 요소 
    //this로 하면 마우스 올렸을때의 아까 그녀석
    $(function(){
        
        $('h1').css('color','red');

        //$('선택자').on('이벤트 종류' , 할일);

        $('#typo, h1').mouseover(function(){
            //아이디 type의 배경색을 green으로 해주세요
             $(this).css('background-color','green');
        })
        .mouseout(function(){
             $(this).css('background-color', '#3498db');
        }); //typo mouseout

    });

    */