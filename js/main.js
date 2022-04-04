$(function() {
  //홈 화면만 마우스휠 이벤트 찾아볼 것

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

      $('.work_tab button').not(this).removeClass('on')
      $(this).addClass('on')
  })
  $('.gr_btn').click(function() {
      $('.coding').hide();       
      $('.graphic').show();

      $('.work_tab button').not(this).removeClass('on')
      $(this).addClass('on')
      $('.graphic ul').masonry()
  })
  //  $('.work_tab button').click(function() {
  //   $('.work_tab button').not(this).removeClass('on')
  //   $(this).addClass('on');

  //   let n = $(this).index(); 

  //   $('.work_contents>div').hide()
  //   $('.work_contents>div').eq(n).show()
  //  })

})