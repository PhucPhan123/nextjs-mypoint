import React, { Component } from "react";
import Layout from "../components/Layout.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class PersonalPage extends Component{
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
  };
  
  render () {
    return (
      <Layout title="Trang cá nhân">
        <Navbar/>
        <main id="main">
          <div className="main-content">
              <div className="container">
                <div className="content">
                  <div className="row">
                    <div className="col-md-4 text-right">
                      <div className="avatar_right">
                        <div className="avatar_img">
                          <img src="../images/avatar.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="tab-list tab-custom left" data-tab="#tab-content">
                        <a className="tab-list-item active" href="javascript:void(0)" data-tag="#thongtin">
                          Thông tin 
                        </a>
                        <a className="tab-list-item" href="javascript:void(0)" data-tag="#lichsudiem">
                          Lịch sử điểm
                        </a>
                        <a className="tab-list-item" href="javascript:void(0)" data-tag="#uudai">
                          Ưu đãi của tôi
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="tab-content">
                    <div id="thongtin" className="tab-content wss">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="border_thongtin">
                            <div className="heading_thongtin">
                              <div className="heading_left">Thông tin cá nhân</div>
                              <div className="heading_right">
                                <a className="button_edit edit" href="#">Chỉnh sửa</a>
                                <a className="button_edit pin" href="#">Đổi mã pin</a>
                                <a className="button_edit_hd" href="#">Lưu chỉnh sửa</a>
                              </div>
                            </div>
                            <form action id method="POST" className="form_controller form_horizontal">
                              <div className="form_group disable">
                                <label className="control_label">Biệt Danh</label>
                                <input type="text" defaultValue="Linh" name="bietdanh" className="form_control" readOnly />
                              </div>
                              <div className="form_group disable">
                                <label className="control_label">Họ và tên</label>
                                <input type="text" name="hovaten" defaultValue="Hoàng Thùy Linh" className="form_control" readOnly required />
                              </div>
                              <div className="form_group disable">
                                <label className="control_label">Mật khẩu</label>
                                <input type="password" name="matkhau" defaultValue="Mật khẩu" className="form_control" readOnly required />
                              </div>
                              <div className="form_group disable">
                                <label className="control_label">Số điện thoại</label>
                                <input type="text" name="sodienthoai" defaultValue="0969 269 023" className="form_control" readOnly required />
                              </div>
                              <div className="form_group disable">
                                <label className="control_label">Ngày/Tháng/Năm Sinh</label>
                                <input type="date" name="ngaythangnamsinh" placeholder="dd/mm/yyyy" className="form_control" readOnly />
                              </div>
                              <div className="form_group disable">
                                <label className="control_label">Giới tính</label>
                                <select name="gioitinh" className="form_control" disabled>
                                  <option value="nam" selected="selected">Nam</option>
                                  <option value="nu">Nữ</option>
                                </select>
                              </div>
                              <div className="form_group">
                                <label className="control_label">Địa chỉ</label>
                                <input type="text" name="diachi" defaultValue="Địa chỉ" className="form_control" readOnly />
                              </div>
                              <div className="form_group disable">
                                <label className="control_label" />
                                <select name="tinhthanhpho" className="form_control" disabled>
                                  <option value={0} selected="selected">Tỉnh/Thành Phố</option>
                                  <option value="hcm">Hồ Chí Minh</option>
                                  <option value="hn">Hà Nội</option>
                                </select>
                              </div>
                              <div className="form_group disable">
                                <label className="control_label">Email</label>
                                <input type="text" name="email" defaultValue="slex@onteractive.eu" className="form_control" readOnly />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="border_thongtin">
                            <div className="heading_thongtin">
                              <div className="heading_left">Xếp hạng</div>
                            </div>
                            <div className="thongtin_the">
                              <div className="img_the">
                                <img src="../images/group-250-2.png" />
                                <div className="title-cart">Thành viên hạng Đồng</div>
                                <div className="point-cart">Bạn đang có 457 điểm</div>
                              </div>
                              <div className="text_tongdiem">
                                <div>Tổng điểm tích lũy</div>
                              </div>
                              <div className="bar_the">
                                <div className="bar_thuc" data-value={948} data-max={1000} />
                                <div className="bar_rong" />
                              </div>
                              <div className="diem_the">
                                <div className="tong_diem"><b>948</b>/1000</div>
                                <div className="diem_can_dat text-right">Còn <b>52 điểm</b> để lên hạng Bạc</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="lichsudiem" className="tab-content wss">
                      <div className="row">
                        <div className="col-md-3">
                          <form action id method="POST" className="form_controller form_vertical">
                            <div className="form_group">
                              <label className="control_label">LOẠI GIAO DỊCH</label>
                              <select name="loaigiaodich" className="form_control">
                                <option value="all" selected="selected">Tất cả</option>
                                <option value="order">Loại khác</option>
                              </select>
                            </div>
                            <div className="form_group">
                              <label className="control_label">THỜI GIAN</label>
                              <select name="thoigian" className="form_control">
                                <option value="07/2019">Tháng 7/2029</option>
                                <option value="08/2019" selected="selected">Tháng 8/2029</option>
                              </select>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-9">
                          <div className="border_lichsudiem">
                            <div className="table_lichsudiem">
                              <div className="heading_table">
                                <div className="tr_heading_table">
                                  <div className="text_heading_table">LOẠI GIAO DỊCH</div>
                                  <div className="text_heading_table">THỜI GIAN</div>
                                  <div className="text_heading_table">ĐỊA ĐIỂM</div>
                                  <div className="text_heading_table">SỐ ĐIỂM</div>
                                </div>
                              </div>
                              <div className="body_table">
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Tích điểm</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem">+150 <i className="fal fa-angle-right" /></div>
                                </div>
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Đổi ưu đãi</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem tr_table_bold">-150 <i className="fal fa-angle-right" /></div>
                                </div>
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Tích điểm</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem">+150 <i className="fal fa-angle-right" /></div>
                                </div>
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Đổi ưu đãi</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem tr_table_bold">-150 <i className="fal fa-angle-right" /></div>
                                </div>
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Tích điểm</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem">+150 <i className="fal fa-angle-right" /></div>
                                </div>
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Tích điểm</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem">+150 <i className="fal fa-angle-right" /></div>
                                </div>
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Tích điểm</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem">+150 <i className="fal fa-angle-right" /></div>
                                </div>
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Tích điểm</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem">+150 <i className="fal fa-angle-right" /></div>
                                </div>
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Tích điểm</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem">+150 <i className="fal fa-angle-right" /></div>
                                </div>
                                <div className="tr_table">
                                  <div className="td_table tr_table_bold">Tích điểm</div>
                                  <div className="td_table">14 Tháng 8, 2019 20:12</div>
                                  <div className="td_table">Circle K Đội Cấn, Hà Nội</div>
                                  <div className="td_table td_table_diem">+150 <i className="fal fa-angle-right" /></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="phantrang">
                            <ul className="pagination">
                              <li className="hide_page"><a href="#"><i className="fal fa-angle-left" /></a></li>
                              <li className="active"><a href="#">1</a></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#">...</a></li>
                              <li><a href="#">20</a></li>
                              <li className="visi_page"><a href="#"><i className="fal fa-angle-right" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="uudai" className="tab-content wss">
                      <div className="row">
                        <div className="col-md-3">
                          <form action id method="POST" className="form_controller form_vertical">
                            <div className="form_group">
                              <label className="control_label">SẮP XẾP</label>
                              <select name="sapxep" className="form_control">
                                <option value="new" selected="selected">Mới nhất</option>
                                <option value="old">Củ nhất</option>
                              </select>
                            </div>
                            <div className="form_group">
                              <label className="control_label">TÌNH TRẠNG SỬ DỤNG</label>
                              <select name="thoigian" className="form_control">
                                <option value="all" selected="selected">Tất cả</option>
                                <option value="order">Khác</option>
                              </select>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-9">
                          <div className="border_uudai">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher">1 giờ</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher">1 giờ</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher">1 giờ</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher">1 giờ</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_yellow">1 giờ</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_yellow">1 giờ</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_yellow">1 giờ</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_green">1 giờ</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_hethan">Hết hạn</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_dasudung">Đã sử dụng</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_dasudung">Đã sử dụng</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_dasudung">Đã sử dụng</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_dasudung">Đã sử dụng</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="voucher_uudai">
                                  <div className="img_voucher">
                                    <img src="../images/inner-artwork.png" />
                                  </div>
                                  <div className="body_voucher">
                                    <div className="text_voucher">Voucher giảm giá 30%</div>
                                    <div className="date_voucher">Hết hạn vào 21 tháng 9, 2019</div>
                                    <div className="deadline_voucher deadline_voucher_dasudung">Đã sử dụng</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="phantrang">
                            <ul className="pagination">
                              <li className="hide_page"><a href="#"><i className="fal fa-angle-left" /></a></li>
                              <li className="active"><a href="#">1</a></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#">...</a></li>
                              <li><a href="#">20</a></li>
                              <li className="visi_page"><a href="#"><i className="fal fa-angle-right" /></a></li>
                            </ul>
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

export default PersonalPage;