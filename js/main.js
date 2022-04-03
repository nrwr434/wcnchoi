$(function() {
  //홈 화면 스크롤 이벤트
  /*
  let elm = "#home", event;
  $(elm).each(function (index) {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      let delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      }
      else if (event.detail)
        delta = -event.detail / 3;
      let moveTop = $(window).scrollTop();
      let elmSelecter = $(elm).eq(index);
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        if ($(elmSelecter).next() != undefined) {
          try {
            moveTop = $(elmSelecter).next().offset().top;
          } catch (e) { }
        }
        // 마우스휠을 아래에서 위로
      } else {
        if ($(elmSelecter).prev() != undefined) {
          try {
            moveTop = $(elmSelecter).prev().offset().top;
          } catch (e) { }
        }
      }

      // 화면 이동 0.8초(800)
      $("html,body").stop().animate({
        scrollTop: moveTop + 'px'
      }, {
        duration: 500, complete: function () {
        }
      });
    });
  });//each
  */
  //GNB
  $('.gnb>li').click(function() {
    let n = $(this).index();
    //window.alert(n)
    $('html, body').animate({
      scrollTop : $('section').eq(n).offset().top
    })
  })
  $('.gnb ul li').click(function() {
    let n = $(this).index(); // 0,1
    $('html, body').animate({
      scrollTop : $('#project').offset().top
    });
    if(n == 0) {
      $('.graphic').hide();
      $('.coding').show();
    }
    else {
      $('.coding').hide();       
      $('.graphic').show();
    }
  })
  $('.graphic ul li').masonry({
    itemSelector: '.graphic ul li'
  });


  //GNB 스타일 변경
   let a = 1;
   $('.arrow').click(function() {
      let win = $(window).width();
      $('.arrow').toggleClass('on');

      if(a != 0) {
         $('.all_menu').css({'right' : -260});
         $('main').stop().animate({'width' : '100%'})
         $('footer').stop().animate({'width' : '100%'})
         a = 0;
      }
      else {
         $('.all_menu').css({'right' : 0});
         $('main').stop().animate({'width' : win - 260})
         $('footer').stop().animate({'width' : win - 260})
         a = 1;
      }
   })

  //Project 탭
  $('.co_btn').click(function() {
      $('.graphic').hide();
      $('.coding').show();             

  })
  $('.gr_btn').click(function() {
      $('.coding').hide();       
      $('.graphic').show();
      
  })

})