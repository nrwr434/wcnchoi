$(function() {
   $('header .allmenu button').click(function() {
      $('header .gnb').show()
      $('header .allmenu').addClass('on')
   })
   $('.mo_gnb_close').click(function() {
      $('header .gnb').hide()
      $('header .allmenu').removeClass('on')
      
   })
   // $('header .gnb').mouseup(function() {
   //    $('header .gnb').addClass('gnb_on')
   // })
   $('header .g1>li').click(function() {
      $('header .g1>li').not(this).find('.g2').slideUp();
      $(this).find('.g2').slideToggle();
      // $('.p_m').toggleClass('on')
      $('header .g1>li').not(this).find('.p_m').removeClass('on');
      $(this).find('.p_m').toggleClass('on')

   })

   $('header .g1>li').hover(function() {
      // $('header .g1>li').not(this).find('.g2').stop().slideUp();
      $(this).find('.g2').stop().slideDown();
      // // $('.p_m').toggleClass('on')
      // $('header .g1>li').not(this).find('.p_m').removeClass('on');
      // $(this).find('.p_m').toggleClass('on');      
      
      $('header').addClass('bg_on');
      $('.sns_wrap a:nth-child(1) img').attr('src', 'img/facebook.png')
      $('.sns_wrap a:nth-child(2) img').attr('src', 'img/kakaostory.png')
      $('.sns_wrap a:nth-child(3) img').attr('src', 'img/naverblog.png')
   }, function() {
      $('header .g1 .g2').hide()
      $('header').removeClass('bg_on')
      $('.sns_wrap a:nth-child(1) img').attr('src', 'img/facebook_w.png')
      $('.sns_wrap a:nth-child(2) img').attr('src', 'img/kakaostory_w.png')
      $('.sns_wrap a:nth-child(3) img').attr('src', 'img/naverblog_w.png')
   })
   
   if($(window).scrollTop() >= 10) {
      $('header').addClass('bg_on');
      $('.sns_wrap a:nth-child(1) img').attr('src', 'img/facebook.png')
      $('.sns_wrap a:nth-child(2) img').attr('src', 'img/kakaostory.png')
      $('.sns_wrap a:nth-child(3) img').attr('src', 'img/naverblog.png')

   }
   if($(window).scrollTop() < 10) {
      $('header').removeClass('bg_on')
      $('.sns_wrap a:nth-child(1) img').attr('src', 'img/facebook_w.png')
      $('.sns_wrap a:nth-child(2) img').attr('src', 'img/kakaostory_w.png')
      $('.sns_wrap a:nth-child(3) img').attr('src', 'img/naverblog_w.png')
   }
   $(window).scroll(function() {
      if($(window).scrollTop() >= 10) {
         $('header').addClass('bg_on')
         $('.sns_wrap a:nth-child(1) img').attr('src', 'img/facebook.png')
         $('.sns_wrap a:nth-child(2) img').attr('src', 'img/kakaostory.png')
         $('.sns_wrap a:nth-child(3) img').attr('src', 'img/naverblog.png')
        

      }
      if($(window).scrollTop() < 10) {
         $('header').removeClass('bg_on')
         $('.sns_wrap a:nth-child(1) img').attr('src', 'img/facebook_w.png')
         $('.sns_wrap a:nth-child(2) img').attr('src', 'img/kakaostory_w.png')
         $('.sns_wrap a:nth-child(3) img').attr('src', 'img/naverblog_w.png')
         
      }
   })
   // top_btn
   $('.top_btn').click(function() {
      $('html, body').animate({
         scrollTop : 0
      })
   })

   // 포토리뷰
   $('.review').slick({
      slidesToShow : 3,
      autoplay : true,
      //dots: true,
      appendDots : $('.rv_dots'),
      appendArrows: $('.rv_arrows'),
      responsive : [
         {
            breakpoint : 1530,
            settings : {
               slidesToShow : 2 ,
               dots: true    
            }
         }, {
            breakpoint : 840,
            settings : {
               slidesToShow : 1,
               dots: true,
            }
         }
      ]
   })
   // 작업 현장
   $('.work_list').slick({
      slidesToShow : 3,
      autoplay : true,
      appendDots: $('.wk_dots'),
      appendArrows: $('.wk_arrows'),
      responsive : [
         {
            breakpoint : 1530,
            settings : {
               slidesToShow : 2,
               dots: true,
            }
         }, {
            breakpoint : 840,
            settings : {
               slidesToShow : 1,
               dots: true,
            }
         }
      ]
   })
})//ready