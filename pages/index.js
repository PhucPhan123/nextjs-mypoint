import React, { Component } from "react";
import Layout from "../components/Layout.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class HomePage extends Component{
  static pageTransitionDelayEnter = true;
  
  state = {};

  componentDidMount = () => {
    $("#login").click(function(){
	    $("#myLogin").modal();
	  });
  	$('#openMyMenu').click(function(event){
  		event.preventDefault();
  		$('#main-menu').addClass('open');
  		$('#closeMenu').addClass('open');
  	});
  	$('#closeMenu').click(function(event) {
  		$('#main-menu').removeClass('open');
  		$(this).removeClass('open');
  	});
  	$('#main-menu ul li').find('ul').each(function(index, el) {
  		$(this).parent().append('<span class="far fa-angle-down show-submenu-mb"></span>');
  	
  	});
  	$('.show-submenu-mb').click(function(event) {
  		$(this).prev('ul').toggleClass('open');
    });
    $('a[data-dr="dropdown"]').click(function(event) {
      $(this).next().toggle('slow');
    });
    $('.home-banner').owlCarousel({
      items: 1,
        loop:true,
        margin:0,
    });
    $('.custom_dropdown').click(function () {
          $(this).attr('tabindex', 1).focus();
          $(this).toggleClass('active');
          $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.custom_dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.custom_dropdown .dropdown-menu li').click(function () {
        $(this).parents('.custom_dropdown').children('.select').find('div').html($(this).html());
        $(this).parents('.custom_dropdown').find('input').attr('value', $(this).attr('data-value'));
    });
    $('.change_step').each(function(index, el) {
    	$(this).click(function(event) {
    		event.preventDefault();
    		var step = $(this).attr('data-step');
    		if (step != '') {
    			$('.step').removeClass('active');
    			$(step).addClass('active');
    			$('.infor-step .title .lg-rs-title').removeClass('active');
    			$('.infor-step .group-bar .bar').removeClass('active');
    			$('.infor-step .title .lg-rs-title[data-step="'+step+'"]').addClass('active');
    			$('.infor-step .group-bar .bar[data-step="'+step+'"]').addClass('active');
    		}
    		
    	});
    });
    $('.bar_the .bar_thuc').each(function(index, el) {
    	var current = $(this).attr('data-value');
    	var max = $(this).attr('data-max');
    	var phantram = Math.round((current/max)*100);
    	$(this).css('width', phantram+'%');
    });
    
    $('.button_edit.edit').click(function(event) {
    	event.preventDefault();
    	$('form input[type=text]').attr('readonly', false);
    	$('form input[type=date]').attr('readonly', false);
    	$('form input[type=password]').attr('readonly', false);
    	$('form select').attr('disabled', false);

    	$('form input[type=text]').parent().removeClass('disable');
    	$('form input[type=date]').parent().removeClass('disable');
    	$('form input[type=password]').parent().removeClass('disable');
    	$('form select').parent().removeClass('disable');

    	$('.button_edit').css('display', 'none');
    	$('.button_edit_hd').css('display', 'inline-block');
    });
    $('.button_edit_hd').click(function(event) {
    	event.preventDefault();
    	$('form input[type=text]').attr('readonly', true);
    	$('form input[type=date]').attr('readonly', true);
    	$('form input[type=password]').attr('readonly', true);
    	$('form select').attr('disabled', true);

    	$('form input[type=text]').parent().addClass('disable');
    	$('form input[type=date]').parent().addClass('disable');
    	$('form input[type=password]').parent().addClass('disable');
    	$('form select').parent().addClass('disable');

    	$('.button_edit').css('display', 'inline-block');
    	$(this).css('display', 'none');
    });
    $('.slides-partner').owlCarousel({
      loop:true,
        margin:30,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            768:{
                items:4,
            },
            1024:{
                items:6,
            }
        }
    });
    $('.slides-hot-deals').owlCarousel({
      loop:true,
        margin:30,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
    $('.slides-news').owlCarousel({
      loop:true,
        margin:30,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
    $('.slides-comments').owlCarousel({
      loop:true,
        margin:30,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
    $('.slides-img-store').owlCarousel({
      loop:true,
        margin:30,
        dots: false,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
  };
  render () {
    return (
      <Layout title="My Point Việt Nam">
        <Navbar/>
        <main id="main">
          <div class="container">
            <section class="banner-slides">
              <div class="home-banner dot-ab owl-carousel owl-theme">
                <div class="item">
                  <a href="#"><img src="../images/banner_home.svg" alt="1"/></a>
                </div>
                <div class="item">
                  <a href="#"><img src="../images/banner_home.svg" alt="2" /></a>
                </div>
                <div class="item">
                  <a href="#"><img src="../images/banner_home.svg" alt="3" /></a>
                </div>
              </div>
            </section>
            <section class="partner">
              <div class="heading-title">
                <h2>Các thương hiệu đối tác</h2>
                <a href="#" class="float-right view-all">Xem tất cả <i class="far fa-angle-right"></i></a>
              </div>
              <div class="slides-partner owl-carousel owl-theme">
                <div class="item">
                  <a href="#">
                    <img src="../images/Starbuck.png" alt="1" />
                    <p>Starbuck</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/coffee_house.png" alt="1" />
                    <p>The Coffee House</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/logo-lotteria.png" alt="1" />
                    <p>Lotteria</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/Starbuck.png" alt="1" />
                    <p>Starbuck</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/coffee_house.png" alt="1" />
                    <p>The Coffee House</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/logo-lotteria.png" alt="1" />
                    <p>Lotteria</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/Starbuck.png" alt="1" />
                    <p>Starbuck</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/coffee_house.png" alt="1" />
                    <p>The Coffee House</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/logo-lotteria.png" alt="1" />
                    <p>Lotteria</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/Starbuck.png" alt="1"/>
                    <p>Starbuck</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/coffee_house.png" alt="1"/>
                    <p>The Coffee House</p>
                  </a>
                </div>
                <div class="item">
                  <a href="#">
                    <img src="../images/logo-lotteria.png" alt="1"/>
                    <p>Lotteria</p>
                  </a>
                </div>
              </div>
              <a href="#" class="float-right view-all mobile">Xem tất cả <i class="far fa-angle-right"></i></a>
            </section>
            <section class="hot-deals">
              <div class="heading-title">
                <h2>Có thể bạn quan tâm</h2>
              </div>
              <div class="slides-hot-deals  owl-carousel owl-theme">
                
                <div class="hotdeals-item">
                  <div class="image">
                    <a href="#"><img src="../images/hotdeal-1.svg" alt=""/></a>
                  </div>
                  <div class="description">
                    <a href="#" class="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                    <div class="group">
                      <a href="#"><img src="../images/icon-starbuck.svg" alt=""/>&nbsp;&nbsp; Starbuck</a>
                      <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt=""/></a>
                    </div>
                  </div>
                </div>
              
                <div class="hotdeals-item">
                  <div class="image">
                    <a href="#"><img src="../images/hotdeal-2.png" alt=""/></a>
                  </div>
                  <div class="description">
                    <a href="#" class="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                    <div class="group">
                      <a href="#"><img src="../images/icon-starbuck.svg" alt=""/> &nbsp;&nbsp; Starbuck</a>
                      <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt=""/></a>
                    </div>
                  </div>
                </div>
              
                <div class="hotdeals-item">
                  <div class="image">
                    <a href="#"><img src="../images/hotdeal-1.svg" alt=""/></a>
                  </div>
                  <div class="description">
                    <a href="#" class="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                    <div class="group">
                      <a href="#"><img src="../images/icon-starbuck.svg" alt=""/>&nbsp;&nbsp; Starbuck</a>
                      <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt=""/></a>
                    </div>
                  </div>
                </div>
                
              </div>
              <a href="#" class="float-right view-all mobile">Xem tất cả <i class="far fa-angle-right"></i></a>
            </section>
            <section class="news">
              <div class="heading-title">
                <h2>Tin tức</h2>
                <a href="#" class="float-right view-all">Xem tất cả <i class="far fa-angle-right"></i></a>
              </div>
              <div class="slides-news owl-carousel owl-theme">
                
                <div class="news-item">
                  <div class="image">
                    <a href="#"><img src="../images/tin-tuc-1.jpg" alt=""/></a>
                  </div>
                  <div class="description">
                    <a href="#" class="title">Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?</a>
                    <div class="date-added">
                      25 Tháng 8, 2019  02:47
                    </div>
                  </div>
                </div>
              
                <div class="news-item">
                  <div class="image">
                    <a href="#"><img src="../images/tin-tuc-2.jpg" alt=""/></a>
                  </div>
                  <div class="description">
                    <a href="#" class="title">Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?</a>
                    <div class="date-added">
                      25 Tháng 8, 2019  02:47
                    </div>
                  </div>
                </div>
              
                <div class="news-item">
                  <div class="image">
                    <a href="#"><img src="../images/tin-tuc-3.jpg" alt=""/></a>
                  </div>
                  <div class="description">
                    <a href="#" class="title">Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?</a>
                    <div class="date-added">
                      25 Tháng 8, 2019  02:47
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" class="float-right view-all mobile">Xem tất cả <i class="far fa-angle-right"></i></a>
            </section>
            <section class="about">
              <div class="about-content">
                <img src="../images/bg-group-icon.png" alt=""/>
                <div class="about-des">
                  <h2>Giới thiệu</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                  <h3>Cài đặt Mypoint ngay</h3>
                  <div class="group-install">
                    <a href="#"><img src="../images/android.png" alt=""/></a>
                    <a href="#"><img src="../images/ios.png" alt=""/></a>
                  </div>
                </div>
              </div>
              <div class="about-content-mobile">
                <div class="about-des">
                  <h2>Giới thiệu</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                  <h3>Cài đặt Mypoint ngay</h3>
                  <div class="group-install">
                    <a href="#"><img src="../images/android.png" alt=""/></a>
                    <a href="#"><img src="../images/ios.png" alt=""/></a>
                  </div>
                </div>
                <img src="../images/group-icon.svg" alt=""/>
              </div>
            </section>
          </div>
        </main>
        <Footer/>
      </Layout>
    );
  }
}

export default HomePage;