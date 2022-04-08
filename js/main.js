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
      $('.gr_btn').removeClass('on')
      $('.coding').show();
      $('.co_btn').addClass('on')
    }
    else {
      $('.coding').hide();       
      $('.co_btn').removeClass('on')
      $('.graphic').show();
      $('.gr_btn').addClass('on')
      $('.graphic ul').masonry()
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

  //  타이핑
  // var typing = document.getElementById('p_ty');
 
  // var typewriter = new Typewriter(typing, {
  //     loop: false, delay: 1000
  // });
   
  // typewriter.typeString('안녕하세요,')      
  //     // .pauseFor(2500)
  //     // .deleteAll()
  //     // .typeString('신입 웹디자이너 & 웹퍼블리셔')
  //     // .pauseFor(2500)
  //     // .deleteAll()
  //     // .typeString('최우찬 입니다.')
  //     .start();
  
  var typingBool = false; 
  var typingIdx=0; 
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;

  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  if(typingBool==false){ // 타이핑이 진행되지 않았다면 
      typingBool=true; 
      var tyInt = setInterval(typing,100); // 반복동작 
  } 
      
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ if(liIndex<liLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       liIndex++; 
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,100);
         },1000);
        } else if(liIndex==liLength-1){
          
         //마지막 문장까지 써지면 반복종료
           clearInterval(tyInt);
        }
    } 
}  
  // 마지막문장이 느림
  
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