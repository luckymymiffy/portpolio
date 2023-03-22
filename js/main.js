  $(function(){

    var now = 0; //현재 보고 있는 페이지
    var want; //보고자 하는 페이지
    var now_stop = true; //에니메이션이 멈춘 상태인지
    $(window).on('mousewheel',function(e){

        if(now_stop){ //에니메이션이 끝나야 실행
            if( e.originalEvent.deltaY > 0 ){ //마우스 휠을 내렸을 때
                if(now < 3){ //마지막 페이지가 아닌 경우
                    want = now + 1;
                    //현재 보고 있는 페이지를 위로 올림
                    now_stop = false;
                    $('section').eq(now).stop(true,true).animate({top:'-100%'},500);
                    $('section').eq(want).stop(true,true).animate({
                        top:0
                    }, 500, function(){
                        $('.bg_wrap').removeClass('on');
                        $('section').eq(want).find('.bg_wrap').addClass('on');
                        now = want;
                        now_stop = true;
                    });
                } // if(now < 3)
            } else { //마우스 휠을 올렸을 때
                if(now > 0){ //첫 페이지가 아닌 경우
                    want = now - 1;
                    //현재 보고 있는 페이지를 아래로 내림
                    now_stop = false;
                    $('section').eq(now).stop(true,true).animate({top:'100%'},500);
                    $('section').eq(want).stop(true,true).animate({
                        top:0
                    }, 500, function(){
                        $('.bg_wrap').removeClass('on');
                        $('section').eq(want).find('.bg_wrap').addClass('on');
                        now = want;
                        now_stop = true;
                    });
                } // if(now < 4)
            } // if(e.originalEvent.deltaY > 0) else
        } // if(now_stop)
    });


    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

      var swiper = new Swiper(".panel1_swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        freeMode : false, 
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }); 

      var swiper = new Swiper(".panel2_swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      $('.tab_set').each(function () {
        

        var anchor = $(this).find('.tabs a'); //전체에서 a를 찾기
        var anchor_on = $(this).find('.tabs a.on'); //찾은 a에서 .on찾기
        var on_href = anchor_on.attr('href');  //기본으로 .on을 붙여놓은 a의 href 값 찾기
        var allpanel = $(this).find('.panels > div'); //전체 panel들 찾기
        
        $(on_href).show(); //처음 열려있을 .on이 붙은 내용

        anchor.each(function () {  //각각의 a가 개별로 행동하게 할것이다.

            var href = $(this).attr('href');  // 선택한 a에게서 href 값 찾기
          
            $(this).click(function () {  //a를 클릭하면
                allpanel.hide();  //모든 panel을 닫아라
                anchor.removeClass('on');  //모든 a에게서.on을 빼라 
                $(this).addClass('on');  // 선택한 a에게 .on을 줘라
                $(href).show(); //찾은 href 값을 보여줘라
            });

        });


    }); //tab_set 끝

}); //제이퀴리 레디 끝

