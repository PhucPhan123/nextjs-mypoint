import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

class PartnerInfoPage extends Component{
  static pageTransitionDelayEnter = true;
  state = {};
  
  componentDidMount = () => {
    $('.tab-list-item').each(function(index, el) {
		$(this).click(function(event) {
			$('.tab-list-item').removeClass('active');
			var tag = $(this).attr('data-tag');
			var tab = $(this).parent().attr('data-tab');
			$(tab).children('.tab-content').css('display','none');
			$(this).addClass('active');
			$(tab).children(tag).css('display','block');
		});
	});
    $('.tab-list .tab-list-item:first-child').trigger('click');
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
      <Layout title="Thông tin đối tác">
        <Navbar/>
		<main id="main">
            <div className="bg-paralex-parner" style={{backgroundImage: 'url("../../images/chitiet-cuahang.jpg")'}}>
            <div className="timeline">
                <div className="avatar">
                <img src="../../images/Group460.png" alt="" />
                </div>
                <div className="information">
                <h3>Starbucks Coffee</h3>
                <div className="group-time">
                    <div className="time">
                    <div className="icon"><img src="../../images/Food-Deactive.png" alt="" /></div>
                    <div className="infor">
                        <p>Lĩnh vực</p> 
                        <p>Ẩm thực</p>
                    </div>
                    </div>
                    <div className="time">
                    <div className="icon"><img src="../../images/Website.png" alt="" /></div>
                    <div className="infor">
                        <p>Website</p> 
                        <p>Starbucks.vn</p>
                    </div>
                    </div>
                    <div className="time">
                    <div className="icon"><img src="../../images/icon-giamgia.png" alt="" /></div>
                    <div className="infor">
                        <p>Tỉ lệ tích điểm</p> 
                        <p>30%</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="main-content">
            <div className="container">
                <div className="row">
                <div className="col-lg-9">
                    <div className="tab-list tab-custom left" data-tab="#tab-content">
                    <a className="tab-list-item active" href="javascript:void(0)" data-tag="#thongtin">
                        Thông tin
                    </a>
                    <a className="tab-list-item" href="javascript:void(0)" data-tag="#uudai">
                        Ưu đãi
                    </a>
                    <a className="tab-list-item" href="javascript:void(0)" data-tag="#cuahang">
                        Cửa hàng
                    </a>
                    </div>
                    <div id="tab-content">
                    <div id="thongtin" className="tab-content wss">
                        <div className="information-store">
                        <div className="description">
                            <h4>
                            Nói rằng Starbucks mua và rang cà phê nguyên hạt chất lượng cao là hoàn toàn đúng. Đó là điều cốt lõi của công việc chúng tôi làm – nhưng thật khó để kể toàn bộ câu chuyện.
                            </h4>
                            <p>
                            Các quán cà phê của chúng tôi đã trở thành địa điểm dành cho những người yêu thích cà phê ở mọi nơi. Tại sao họ chỉ muốn dùng cà phê Starbucks? Vì họ biết họ có thể tin tưởng vào dịch vụ chân thật, một không gian hấp dẫn và một cốc cà phê tuyệt vời được rang một cách chuyên nghiệp và được pha đậm đặc mọi lúc.
                            </p>
                            <h4>
                            Mong đợi Hơn cả Cà phê
                            </h4>
                            <p>
                            Chúng tôi là những nhà cung cấp nhiệt tình về cà phê và mọi thứ khác đi kèm với trải nghiệm bổ ích tại quán cà phê. Chúng tôi cũng cung cấp cơ hội lựa chọn các loại chè Tazo® hảo hạng, bánh ngọt ngon và các món chiêu đãi thú vị khác nhằm làm hài lòng mọi vị giác. Và nhạc bạn nghe trong cửa hàng được chọn là vì nghệ thuật và sự hấp dẫn của bản nhạc.
                            </p>
                            <p>
                            Mọi người đến Starbucks để trò chuyện, họp mặt hoặc làm việc. Chúng tôi là địa điểm tụ họp cho tình hàng xóm, một phần của công việc hàng ngày – và chúng tôi không thể hạnh phúc hơn về điều này. Truy cập để tìm hiểu về chúng tôi và bạn sẽ thấy: chúng tôi thú vị hơn nhiều những gì chúng tôi pha.
                            </p>
                        </div>
                        <div className="gallery-box">
                            <div className="heading-title">
                            <h2>Hình ảnh</h2>
                            </div>
                            <div className="slides-img-store owl-carousel owl-theme">
                            <div className="item">
                                <a href="#">
                                <img src="../../images/tin-tuc-1.jpg" alt={1} />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                <img src="../../images/tin-tuc-2.jpg" alt={1} />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                <img src="../../images/tin-tuc-3.jpg" alt={1} />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                <img src="../../images/tin-tuc-1.jpg" alt={1} />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                <img src="../../images/tin-tuc-2.jpg" alt={1} />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                <img src="../../images/tin-tuc-3.jpg" alt={1} />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="uudai" className="tab-content wss">
                        <div className="banner">
                        <a href="#"><img src="../../images/banner-doitac-chitiet.png" alt="" /></a>
                        </div>
                        <div className="list-partner">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 col-12">
                            <div className="hotdeals-item">
                                <div className="image">
                                <a href="#"><img src="../../images/hotdeal-1.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                            <div className="hotdeals-item">
                                <div className="image">
                                <a href="#"><img src="../../images/hotdeal-2.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                            <div className="hotdeals-item">
                                <div className="image">
                                <a href="#"><img src="../../images/hotdeal-1.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                            <div className="hotdeals-item">
                                <div className="image">
                                <a href="#"><img src="../../images/hotdeal-2.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                            <div className="hotdeals-item">
                                <div className="image">
                                <a href="#"><img src="../../images/hotdeal-1.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                            <div className="hotdeals-item">
                                <div className="image">
                                <a href="#"><img src="../../images/hotdeal-2.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                            <div className="hotdeals-item">
                                <div className="image">
                                <a href="#"><img src="../../images/hotdeal-1.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                            <div className="hotdeals-item">
                                <div className="image">
                                <a href="#"><img src="../../images/hotdeal-2.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12">
                            <div className="hotdeals-item">
                                <div className="image">
                                <a href="#"><img src="../../images/hotdeal-1.svg" alt="" /></a>
                                </div>
                                <div className="description">
                                <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                                <div className="group">
                                    <a href="#"><img src="../../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="pagination-custom text-right">
                        <ul className="paginations">
                            <li><a href="#"><i className="far fa-angle-left" /></a></li>
                            <li><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li>...</li>
                            <li><a href="#">20</a></li>
                            <li><a href="#"><i className="far fa-angle-right" /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div id="cuahang" className="tab-content wss">
                        <div className="lists-store">
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
                                <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span></a>
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
                                <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span></a>
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
                                <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span></a>
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
                                <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span></a>
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
                                <a href="#"><span><i className="fal fa-phone-alt" /> 0132 456 789</span></a>
                            </div>
                            </div>
                        </div>
                        </div>	
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="aside-left">
                    <div className="partner-box">
                        <div className="heading-title">
                        <h2>Đối tác liên quan</h2>
                        </div>
                        <div className="partner-list">
                        <div className="partner-related">
                            <div className="col-img">
                            <a href="#"><img src="../../images/coffee_house.png" alt="" /></a>
                            </div>
                            <div className="col-info">
                            <h4>The Coffee House</h4>
                            <a href>Chi tiết</a>
                            </div>
                        </div>
                        <div className="partner-related">
                            <div className="col-img">
                            <a href="#"><img src="../../images/Starbuck.png" alt="" /></a>
                            </div>
                            <div className="col-info">
                            <h4>Starbuck</h4>
                            <a href>Chi tiết</a>
                            </div>
                        </div>
                        <div className="partner-related">
                            <div className="col-img">
                            <a href="#"><img src="../../images/logo-lotteria.png" alt="" /></a>
                            </div>
                            <div className="col-info">
                            <h4>Lotteria</h4>
                            <a href>Chi tiết</a>
                            </div>
                        </div>
                        <div className="partner-related">
                            <div className="col-img">
                            <a href="#"><img src="../../images/coffee_house.png" alt="" /></a>
                            </div>
                            <div className="col-info">
                            <h4>The Coffee House</h4>
                            <a href>Chi tiết</a>
                            </div>
                        </div>
                        </div>
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

export default PartnerInfoPage;