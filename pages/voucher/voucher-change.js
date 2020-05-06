import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

class VoucherChangePage extends Component{
  static pageTransitionDelayEnter = true;
  state = {};
  
  componentDidMount = () => {
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
    
    $(document).ready(function() {
        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        var slidesPerPage = 4;
        var syncedSecondary = true;
  
      sync1.owlCarousel({
          items : 1,
          slideSpeed : 2000,
          autoplay: false,
          dots: false,
          loop: true,
          responsiveRefreshRate : 200,
      }).on('changed.owl.carousel', syncPosition);
  
      sync2.on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
          items : slidesPerPage,
          margin: 20,
          dots: false,
          smartSpeed: 200,
          slideSpeed : 500,
          slideBy: slidesPerPage,
          responsiveRefreshRate : 100
      }).on('changed.owl.carousel', syncPosition2);
  
        function syncPosition(el) {
          var count = el.item.count-1;
          var current = Math.round(el.item.index - (el.item.count/2) - .5);
          
          if(current < 0) {
            current = count;
          }
          if(current > count) {
            current = 0;
          }
  
          sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
          var onscreen = sync2.find('.owl-item.active').length - 1;
          var start = sync2.find('.owl-item.active').first().index();
          var end = sync2.find('.owl-item.active').last().index();
          
          if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
          }
          if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
          }
       }
    
        function syncPosition2(el) {
          if(syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
          }
        }
        sync2.on("click", ".owl-item", function(e){
          e.preventDefault();
          var number = $(this).index();
          sync1.data('owl.carousel').to(number, 300, true);
        });
    });
  };
  
  render () {
    return (
      <Layout title="Voucher Change">
        <Navbar/>
		<main id="main">
            <div className="container">
                <div className="voucher-detail">
                    <div className="row">
                        <div className="col-md-8 view-mobile-left">
                            <div className="voucher-img">
                            <div id="sync1" className="slides-main owl-carousel owl-theme">
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                            </div>
                            <div id="sync2" className="slides-thumnail owl-carousel owl-theme">
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                                <div className="item">
                                <img src="../../images/detail-voucher.svg" alt="" />
                                </div>
                            </div>
                            </div>
                            <div className="dieu-kien">
                            <h4>Điều kiện sử dụng</h4>
                            <div>
                                - Sử dụng tại hệ thống cửa hàng Starbuck trên toàn quốc.<br />
                                - Voucher này không thể hoàn trả sau khi đổi.<br />
                                - Không thể sử dụng voucher này cùng với các khuyển mãi khác.<br />
                                - Mỗi voucher chỉ có giá trị sử dụng 1 lần.<br />
                                - Xin vui lòng đưa voucher này cho nhân viên thu ngân trước khi thanh toán.<br />
                            </div>
                            </div>
                            <div className="diadiem">
                            <div className="row">
                                <div className="col-lg-8">
                                <h4>Địa điểm áp dụng (10)</h4>
                                </div>
                                <div className="col-lg-4">
                                <div className="custom_dropdown" tabIndex={1}>
                                    <div className="select">
                                    <div>Mới nhất</div>
                                    <i className="fa fa-chevron-left" />
                                    </div>
                                    <input type="hidden" name defaultValue="new" />
                                    <ul className="dropdown-menu" style={{display: 'none'}}>
                                    <li data-value="new">Mới nhất</li>
                                    <li data-value="last">Hot nhất</li>
                                    </ul>
                                </div>
                                <div className="custom_dropdown" tabIndex={1}>
                                    <div className="select">
                                    <div>Hà Nội</div>
                                    <i className="fa fa-chevron-left" />
                                    </div>
                                    <input type="hidden" name defaultValue="hanoi" />
                                    <ul className="dropdown-menu" style={{display: 'none'}}>
                                    <li data-value="hanoi">Hà Nội</li>
                                    <li data-value="tphcm">TP HCM</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="list-store">
                                <div className="item">
                                <div className="col-img">
                                    <img src="../../images/icon-starbuck.svg" alt="" />
                                </div>
                                <div className="col-group">
                                    <div className="col-info">
                                    <div className="detail-address">
                                        <p>Starbucks 14 Ngô Quyền</p>
                                        <p>14 Ngô Quyền, Hoàn Kiếm, Hà Nội</p>
                                    </div>	
                                    </div>
                                    <div className="col-check">
                                    <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span> <i className="far fa-angle-right" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="col-img">
                                    <img src="../../images/icon-starbuck.svg" alt="" />
                                </div>
                                <div className="col-group">
                                    <div className="col-info">
                                    <div className="detail-address">
                                        <p>Starbucks 14 Ngô Quyền</p>
                                        <p>14 Ngô Quyền, Hoàn Kiếm, Hà Nội</p>
                                    </div>	
                                    </div>
                                    <div className="col-check">
                                    <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span> <i className="far fa-angle-right" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="col-img">
                                    <img src="../../images/icon-starbuck.svg" alt="" />
                                </div>
                                <div className="col-group">
                                    <div className="col-info">
                                    <div className="detail-address">
                                        <p>Starbucks 14 Ngô Quyền</p>
                                        <p>14 Ngô Quyền, Hoàn Kiếm, Hà Nội</p>
                                    </div>	
                                    </div>
                                    <div className="col-check">
                                    <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span> <i className="far fa-angle-right" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="col-img">
                                    <img src="../../images/icon-starbuck.svg" alt="" />
                                </div>
                                <div className="col-group">
                                    <div className="col-info">
                                    <div className="detail-address">
                                        <p>Starbucks 14 Ngô Quyền</p>
                                        <p>14 Ngô Quyền, Hoàn Kiếm, Hà Nội</p>
                                    </div>	
                                    </div>
                                    <div className="col-check">
                                    <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span> <i className="far fa-angle-right" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="item">
                                <div className="col-img">
                                    <img src="../../images/icon-starbuck.svg" alt="" />
                                </div>
                                <div className="col-group">
                                    <div className="col-info">
                                    <div className="detail-address">
                                        <p>Starbucks 14 Ngô Quyền</p>
                                        <p>14 Ngô Quyền, Hoàn Kiếm, Hà Nội</p>
                                    </div>	
                                    </div>
                                    <div className="col-check">
                                    <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span> <i className="far fa-angle-right" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>				
                            </div>
                            <div className="support">
                            <h4>Hỗ trợ</h4>
                            <p>Nếu bạn gặp bất kỳ vấn đề gì với voucher này, xin vui lòng liên hệ Starbuck:</p>
                            <div>
                                <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span> <i className="far fa-angle-right" /></a>
                            </div>
                            <div>
                                <a href="#"><span><img src="../../images/Support.svg" alt="" /> support@starbuck.com</span> <i className="far fa-angle-right" /></a>
                            </div>
                            <div>
                                <a href="#"><span><img src="../../images/icon-st.svg" alt="" /> Starbuck trên MyPoint</span> <i className="far fa-angle-right" /></a>
                            </div>
                            </div>
                            <div className="related">
                            <div className="heading-title">
                                <h2>Ưu đãi nổi bật</h2>
                                <a href="#" className="float-right view-all">Xem tất cả <i className="far fa-angle-right" /></a>
                            </div>
                            <div className="slides-hot-deals  owl-carousel owl-theme">
                                <div className="hotdeals-item">
                                <div className="image">
                                    <a href="#"><img src="../../images/hotdeal-1.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                    <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                    <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                    <a href="#">200 &nbsp;&nbsp;<img src="../../images/icon-point.png" alt="" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="hotdeals-item">
                                <div className="image">
                                    <a href="#"><img src="../../images/hotdeal-2.png" alt="" /></a>
                                </div>
                                <div className="description">
                                    <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                    <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" /> &nbsp;&nbsp; Starbuck</a>
                                    <a href="#">200 &nbsp;&nbsp;<img src="../../images/icon-point.png" alt="" /></a>
                                    </div>
                                </div>
                                </div>
                                <div className="hotdeals-item">
                                <div className="image">
                                    <a href="#"><img src="../../images/hotdeal-1.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                    <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                    <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                    <a href="#">200 &nbsp;&nbsp;<img src="../../images/icon-point.png" alt="" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>	
                        </div>
                        <div className="col-md-4 view-mobile-right">
                <div className="infor-voucher">
                  <h3 className="title">
                    <div><img src="../../images/icon-starbuck.svg" alt="" /></div> 
                    <div><span>Voucher giảm</span><br /> 30.000 VND</div>
                  </h3>
                  <div className="point">
                    <a href="#"><img src="../../images/icon-point.png" alt="" />&nbsp; 20 điểm</a>
                  </div>
                  <div className="data-exp">
                    <i className="fal fa-calendar" /> <span>Hạn sử dụng: <b>20/10/2019</b></span>
                  </div>
                  <div className="short-des">
                    Khuyến mãi: Tặng 500 voucher trị giá 50,000VNĐ cho 500 khách hàng đầu tiên có ít nhất 1 giao dịch vào mỗi thứ 2 và thứ 3 hàng tuần tại Starbucks Coffee
                  </div>
                  <div className="btn-voucher">
                    <a href="#" className="button-detail-voucher change">Tải ứng dụng MyPoint để sử dụng</a>
                  </div>
                </div>
                <div className="parner-point">
                  <div className="img"><img src="../../images/icon-starbuck.svg" alt="" /></div> 
                  <div className="name">Starbuck coffee</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae turpis nisl. Sed iaculis mattis velit. Donec fringilla nunc sed enim semper cursus. Donec elementum metus et vulputate </p>
                  <div className="btt">
                    <a href="#"><span>Starbuck coffee trên MyPoint</span> <i className="far fa-angle-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
		<Footer/>
      </Layout>
    );
  }
}

export default VoucherChangePage;