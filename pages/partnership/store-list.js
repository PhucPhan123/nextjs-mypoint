import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

class StoreListPage extends Component{
  static pageTransitionDelayEnter = true;
  state = {};
  
  componentDidMount = () => {
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
  };
  
  render () {
    return (
      <Layout title="Danh sách cửa hàng">
        <Navbar/>
		<main id="main">
            <div className="bg-paralex" style={{backgroundImage: 'url("../images/about-bg.jpg")'}}>
            <h2 className="page-title">Danh sách cửa hàng</h2>
            </div>
            <div className="main-content">
            <div className="container">
                <div className="row">
                <div className="col-sm-4">
                    <div className="title-ds">Tỉnh/ Thành phố</div>
                    <div className="custom_dropdown large" tabIndex={1}>
                    <div className="select">
                        <div>Hà Nội</div>
                        <i className="fa fa-chevron-left" />
                    </div>
                    <input type="hidden" name defaultValue="hanoi" />
                    <ul className="dropdown-menu" style={{display: 'none'}}>
                        <li data-value="hanoi">Hà Nội</li>
                        <li data-value="HCM">HCM</li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="title-ds">Quận/ Huyện</div>
                    <div className="custom_dropdown large" tabIndex={1}>
                    <div className="select">
                        <div>Hoàn Kiếm</div>
                        <i className="fa fa-chevron-left" />
                    </div>
                    <input type="hidden" name defaultValue="hoankiem" />
                    <ul className="dropdown-menu" style={{display: 'none'}}>
                        <li data-value="hoankiem">Hoàn Kiếm</li>
                        <li data-value="hadong">Hà Đông</li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="title-ds">Đối tác</div>
                    <div className="custom_dropdown large" tabIndex={1}>
                    <div className="select">
                        <div>
                        <span className="img"><img src="../images/Starbuck.png" alt="" /></span> Starbucks
                        </div>
                        <i className="fa fa-chevron-left" />
                    </div>
                    <input type="hidden" name defaultValue="hanoi" />
                    <ul className="dropdown-menu" style={{display: 'none'}}>
                        <li data-value="hanoi"><span className="img"><img src="../images/coffee_house.png" alt="" /></span> The Coffee House</li>
                        <li data-value="HCM"><span className="img"><img src="../images/logo-lotteria.png" alt="" /></span> Lotteria</li>
                        <li data-value="HCM"><span className="img"><img src="../images/Starbuck.png" alt="" /></span> Starbucks</li>
                    </ul>
                    </div>
                </div>
                </div>
                <p className="results">Có 18 cửa hàng tại Hoàn Kiếm, Hà Nội</p>
                <div className="list-store-box">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="store-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Starbuck Đội Cấn</a>
                        <div className="address">
                            14 Đội Cấn, Ba Đình, Hà Nội
                        </div>
                        <div className="localtion"><img src="../images/cursor-1.png" alt="" /> 3.6 km</div>
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

export default StoreListPage;