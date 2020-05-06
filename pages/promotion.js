import React, { Component } from "react";
import Layout from "../components/Layout.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class PromotionPage extends Component{
  static pageTransitionDelayEnter = true;
  constructor(props) {
    super(props)

    this.state = {
      food_vouchers: []
    }
  }
  
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
  };
  
  render () {
    const {food_vouchers} = this.state;
    return (
      <Layout title="Ưu đãi - Mã giảm giá">
        <Navbar/>
		    <main id="main">
            <div className="bg-paralex" style={{backgroundImage: 'url("../images/uudai-magiamgia.jpg")'}}>
                <h2 className="page-title">Ưu đãi và mã giảm giá</h2>
            </div>
            <div className="main-content">
                <div className="container">
            <div className="content">
              <div className="banner-advertisement">
                <a href="#"><img src="../images/uudai-banner.png" alt="" /></a>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="tab-list tab-custom left" data-tab="#tab-content">
                    <a className="tab-list-item active" href="javascript:void(0)" data-tag="#All">
                      Tất cả
                    </a>
                    <a className="tab-list-item" href="javascript:void(0)" data-tag="#amthuc">
                      Ẩm thực
                    </a>
                    <a className="tab-list-item" href="javascript:void(0)" data-tag="#thoitrang">
                      Thời trang
                    </a>
                    <a className="tab-list-item" href="javascript:void(0)" data-tag="#giaitri">
                      Giải trí
                    </a>
                    <a className="tab-list-item" href="javascript:void(0)" data-tag="#khac">
                      Khác
                    </a>
                  </div>
                </div>
                <div className="col-md-4 text-right">
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
              <div id="tab-content">
                <div id="All" className="tab-content wss">
                  <div className="list-partner">
                    <div className="row">
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
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
                <div id="amthuc" className="tab-content wss">
                  <div className="list-partner">
                    <div className="row">
                      {food_vouchers && food_vouchers.length ? food_vouchers.map(item =>
                          
                              <div className="col-md-4 col-sm-6 col-12">
                                <div className="hotdeals-item">
                                  <div className="image">
                                  <a href="#"><img src={item.images[0].image_url} alt="" /></a>
                                  </div>
                                  <div className="description">
                                    <a href="#" className="title">{item.name}</a>
                                    <div className="group">
                                      <a href="#"><img src={item.brand.logo} alt="" />&nbsp;&nbsp; {item.brand.brand_name}</a>
                                      <a href="#">{item.voucher_value} &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        ):null}
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
                <div id="thoitrang" className="tab-content wss">
                  <div className="list-partner">
                    <div className="row">
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
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
                <div id="giaitri" className="tab-content wss">
                  <div className="list-partner">
                    <div className="row">
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
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
                <div id="khac" className="tab-content wss">
                  <div className="list-partner">
                    <div className="row">
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-1.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12">
                        <div className="hotdeals-item">
                          <div className="image">
                            <a href="#"><img src="../images/hotdeal-2.svg" alt="" /></a>
                          </div>
                          <div className="description">
                            <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                            <div className="group">
                              <a href="#"><img src="../images/icon-starbuck.svg" alt="" />&nbsp;&nbsp; Starbuck</a>
                              <a href="#">200 &nbsp;&nbsp;<img src="../images/icon-point.png" alt="" /></a>
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

export default PromotionPage;