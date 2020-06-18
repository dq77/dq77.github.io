$(document).ready(function () {

  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    height : window.innerHeight-60,
    autoHeight: true, //高度随内容变化
    speed:700,
    pagination: {
      el: '.swiper-pagination',
      // type : 'custom',
      renderBullet: function (index, className) {
        var str = 15
        if (index == 0){str = 30}
        return '<span class="' + className + '" style="padding-left: '+str+'px"></span>';
      },
    },
    mousewheel: {
      releaseOnEdges: true,
    },
    
    on: {
      slideChangeTransitionStart: function(){
        showPicAnimate(this.activeIndex)
        changePagination(this.activeIndex)
      },
    },
  })

  // 悬浮二维码
  $('.download-ar .box').hover(function(){
      $(this).children('.qrcode').fadeIn(200)
      $(this).animate({height:'210px'},200);
  },function(){
      $(this).children('.qrcode').stop().fadeOut(200)
      $(this).stop().animate({height:'54px'},200);
  })

  // 行切换
  $('.swiper-slide.four .item').hover(function(){
    if ($(this).hasClass('normal')) {
      let id = $(this).data('rowid')

      $('.swiper-slide.four .item').addClass('normal');
      $(this).removeClass('normal');

      $(this).stop().animate({height:'200px'},300);
      $(this).children('h3').stop().animate({fontSize:'32px', marginTop: '30px'},300);
      $(this).children('h3').children('span').stop().animate({fontSize:'40px'},300);
      $(this).children('p').stop().animate({fontSize:'24px'},300);
      
      $('.swiper-slide.four .item.normal').stop().animate({height:'130px'},300);
      $('.swiper-slide.four .item.normal').children('h3').stop().animate({fontSize:'22px', marginTop: '20px'},300);
      $('.swiper-slide.four .item.normal').children('h3').children('span').stop().animate({fontSize:'28px'},300);
      $('.swiper-slide.four .item.normal').children('p').stop().animate({fontSize:'16px'},300);

      $('.swiper-slide.four .blank').stop().animate({top: 130*(id-1)+'px'},300,'swing');

      // 图片切换
      $('.swiper-slide.four .row-pic img').hide()
      $('.swiper-slide.four .row-pic img:nth-of-type('+id+')').show()
    }

  })
  
  // 导航切换
  $('.header .nav-box li').on('click', function(){
    if ( !$(this).hasClass('active') ){
      let id = $(this).data('navid')

      $('.header .nav-box li').removeClass('active');
      $(this).addClass('active');

      $('.header .nav-box .toogle').animate({left: 146 * ( id - 1 ) + 48 +'px'}, 200);
      $('body .pages').hide();
      $('body .pages.nav-page-' + id).show()
    }
  })

});

// 二三页图片放大效果
function showPicAnimate(pageNum){
  var pageStr = ''
  var other = ''
  if ( pageNum == 1 ) {
    pageStr = 'two'
    other = 'three'
  } else if ( pageNum == 2 ) {
    pageStr = 'three'
    other = 'two'
  } else {
    $('.swiper-slide .flex-box .item img' ).animate({width:'80%',padding: '10%'},700)
    return
  }
  $('.swiper-slide.' + pageStr + ' .flex-box .item img' ).animate({width:'100%',padding: 0},800);
  $('.swiper-slide.' + other + ' .flex-box .item img' ).animate({width:'80%',padding: '10%'},700);
}

// 导航条切换效果
function changePagination(pageNum){
  $('.swiper-pagination-bullet').each(function(){
    if ( $(this).css('paddingLeft') == '30px') {
      $(this).animate({paddingLeft: '15px'},300);
    }
  })
  $('.swiper-pagination-bullet-active').animate({paddingLeft: '30px'},300);

}