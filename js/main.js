$(function () {
  // gsap
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  var split_word = new SplitText(".split_word", { type: "words" });
  var split_line = new SplitText(".split_line", { type: "lines" });
  var words = split_word.words;
  var lines = split_line.lines;

  gsap.set(lines , {
    overflow: "hidden",
    textAlign : "left"
  })
  gsap.set(words , {
    transform: "translateY(100%)"
  })

  var p1 = gsap.timeline({  
    scrollTrigger:{
      trigger : ".sc_company .sc_desc",
      start: "top bottom",    
    }
  }).to(".sc_company .sc_desc div", {
    transform: "translateY(0)",
    duration: 0.5,
    stagger: 0.05
  })

  gsap.set(".sc_company .text_area .split_word div" , {
    opacity: 0
  })

  var p2 = gsap.timeline({  
    scrollTrigger:{
      trigger : ".sc_company .text_area .split_word",
      start: "top bottom",    
    }
  }).to(".sc_company .text_area .split_word div", {
    opacity: 1,
    transform: "translateY(0)",
    duration: 0.5,
  })

  var p3 = gsap.timeline({  
    scrollTrigger:{
      trigger : ".sc_team .split_word",
      start: "top bottom",    
    }
  }).to(".sc_team .split_word div", {
    transform: "translateY(0)",
    duration: 0.5,
    stagger: 0.05
  })

  var p4 = gsap.timeline({  
    scrollTrigger:{
      trigger : ".sc_portfolio .split_word",
      start: "top bottom",    
    }
  }).to(".sc_portfolio .split_word div", {
    transform: "translateY(0)",
    duration: 0.5,
    stagger: 0.05
  })

  var p5 = gsap.timeline({  
    scrollTrigger:{
      trigger : ".board_area .split_word",
      start: "top bottom",    
    }
  }).to(".board_area .split_word div", {
    transform: "translateY(0)",
    duration: 0.5,
    stagger: 0.05
  })

  var list = $(".sc_services .list_gsap li");
  gsap.set(list, {
    opacity:0,
    transform: "translateY(20%)"
  })

  var l1 = gsap.timeline({  
    scrollTrigger:{
      trigger : ".sc_services .list",
      start: "top bottom",    
    }
  }).to(".sc_services .list li" ,{
    duration: 0.5,
    opacity: 1,
    transform: "translateY(0%)",
    stagger: 0.2
  })

  var l2 = gsap.timeline({  
    scrollTrigger:{
      trigger : ".sc_team .list",
      start: "top bottom",    
    }
  }).to(".sc_team .list li" ,{
    duration: 0.5,
    opacity: 1,
    transform: "translateY(0%)",
    stagger: 0.2
  })

  var l3 = gsap.timeline({  
    scrollTrigger:{    
      trigger : ".sc_portfolio .list",
      start: "top bottom",    
    }
  }).to(".sc_portfolio .list li" ,{
    duration: 0.5,
    opacity: 1,
    transform: "translateY(0%)",
    stagger: 0.2
  })

  var l4 = gsap.timeline({  
    scrollTrigger:{
      trigger : ".sc_news .list",
      start: "top bottom",    
    }
  }).to(".sc_news .list li" ,{
    duration: 0.5,
    opacity: 1,
    transform: "translateY(0%)",
    stagger: 0.2
  })

  // 마우스
  const $cursor = $(".cursor");
  $(window).mousemove(function(e){
    gsap.to(".cursor", {
      duration: 0.1,
      left: e.pageX - ($cursor.width() / 2),
      top: e.pageY -($cursor.height() / 2)
    })
  })

  $("a").hover(function(){
    $cursor.addClass("link");
  }, function(){
    $cursor.removeClass("link");
  })

  $(".btn_open_menu").hover(function(){
    $cursor.addClass("btn");
  }, function(){
    $cursor.removeClass("btn");
  })

  $(".btn_open_menu").mousemove(function(e){
    console.log(e.offsetX)
    var x = ((-$(this).width() / 2) + e.offsetX) *0.6;    
    var y = ((-$(this).height() / 2) + e.offsetY) *0.6;
    gsap.to(".btn_open_menu_wrap", {
      transform: "translate(" + x + "px," + y + "px)"
    })
  })

  $(".btn_open_menu").mouseleave(function(e){
    gsap.to(".btn_open_menu_wrap", {
      transform: "translate(0,0)"
    })
  })

  // btn_open_menu
  $(".btn_open_menu").click(function(){
    if($(this).hasClass("close")){
      $(this).removeClass("close");
      $("header").removeClass("open_menu");

      // 메뉴 내용
      gsap.to(".menu_area .split_line div div", {
        transform: "translateY(100%)",
        duration: 0.5
      })

      // 메뉴 배경
      gsap.to(".menu_bg", {
        duration: 0.7,
        top: "-100%"
      })
      return;
    }
    
    $(this).addClass("close");
    $("header").addClass("open_menu");

    // 메뉴 내용
    gsap.set(".menu_area .split_line div div", {
      transform: "translateY(100%)"
    })
    gsap.to(".menu_area .split_line div div", {
      delay: 0.5,
      transform: "translateY(0)",
      duration: 0.3
    })

    // 메뉴 배경
    gsap.set(".menu_bg", {
      top: "100%",
      borderRadius: "50% 50% 0 0"
    })
    gsap.to(".menu_bg", {
      duration: 0.5,
      top: "0%",
      borderRadius: 0
    })
  })

  // portfolio
  $(".sc_portfolio .list a").hover(function(){
    var target = $(this).find(".overlay");
    gsap.set(target, {
      transform: "translateY(100%)"
    })

    gsap.to(target, {
      duration : 0.1,
      transform: "translateY(0)"
    })
  }, function(){
    var target = $(this).find(".overlay");
    gsap.to(target, {
      duration : 0.1,
      transform: "translateY(-100%)"
    })
  })

  // board_area
  $(".board_area .text_area a").hover(function(){
    var target_1 = $(this).find(".more");
    var target_2 = $(this).find(".overlay");
    var line = $(this).find(".line");

    gsap.set(line, {
      transform: "translate(-150%, -50%)",
    })
    gsap.to(line, {
      duration : 0.3,
      transform: "translate(-50%, -50%)",
    })

    gsap.set(target_1, {
      transform: "translateY(0)",
      marginRight : "5px"
    })
    gsap.to(target_1, {
      duration : 0.1,
      transform: "translateY(-100%)",
      marginRight : "18px"
    })

    gsap.set(target_2, {
      transform: "translateY(100%)"
    })
    gsap.to(target_2, {
      duration : 0.1,
      transform: "translateY(0)"
    })
  }, function(){
    var target_1 = $(this).find(".more");
    var target_2 = $(this).find(".overlay");
    var line = $(this).find(".line");

    gsap.set(line, {
      transform: "translate(-50%, -50%)",
    })
    gsap.to(line, {
      duration : 0.3,
      transform: "translate(100%, -50%)",
    })
    gsap.set(target_1, {
      transform: "translateY(100%)"
    })
    gsap.to(target_1, {
      duration : 0.1,
      transform: "translateY(0)",
      marginRight : "5px"
    })
    gsap.to(target_2, {
      duration : 0.1,
      transform: "translateY(-100%)"
    })
  })

  // 스와이퍼
  var swiper = new Swiper('.sc_visual .swiper', {
    speed: 1000,
    pagination: {
      el: '.sc_visual .pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.sc_visual .btn_next',
      prevEl: '.sc_visual .btn_prev',
      disabledClass: 'disabled'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // visual 드롭
  $(".sc_visual").mousedown(function(){
    $cursor.addClass("drop");
    $(".sc_visual").addClass("drop");
  })

  $(".sc_visual").mouseup(function(){
    $cursor.removeClass("drop");
    $(".sc_visual").removeClass("drop");
  })

  // 메이슨리
  $('.sc_portfolio .grid').masonry({
    itemSelector: '.sc_portfolio .grid-item',
    horizontalOrder: true
  });

  $('.sc_news .grid').masonry({
    itemSelector: '.sc_news .grid-item',
  });

  // 스크롤바
  var Scrollbar = window.Scrollbar;
  var scrollbar = Scrollbar.init(document.querySelector('#main_scrollbar'));
  scrollbar.addListener(function (status) {
    if(status.offset.y > 0){
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }    
    
    ScrollTrigger.refresh();
  });
});

