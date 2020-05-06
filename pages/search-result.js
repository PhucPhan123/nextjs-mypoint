import React, { Component } from "react";
import Layout from "../components/Layout.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class SearchResultPage extends Component{
  static pageTransitionDelayEnter = true;
  state = {};
  
  componentDidMount = () => {
  
  };
  
  render () {
    return (
      <Layout title="Kết quả tìm kiếm">
        <Navbar/>
		<main id="main">
            <div className="bg-paralex" style={{backgroundImage: 'url("../images/uudai-magiamgia.jpg")'}}>
            <h2 className="page-title">Kết quả tìm kiếm</h2>
            </div>
            <div className="main-content">
            <div className="container">
                <div className="content">
                <div className="text-result">
                    <p>Có <span>60</span> kết quả phù hợp với từ khóa <span>"Từ Khóa"</span></p>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                    <div className="news-item">
                        <div className="image">
                        <a href="#"><img src="../images/tin-tuc-1.jpg" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?</a>
                        <div className="date-added">
                            25 Tháng 8, 2019  02:47
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
                    <div className="partner-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title"><img src="../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                        <div className="group">
                            <p>% Tích <span>30%</span></p>
                            <p><img src="../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                        </div>
                        <div className="readmore text-right">
                            <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="news-item">
                        <div className="image">
                        <a href="#"><img src="../images/tin-tuc-1.jpg" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?</a>
                        <div className="date-added">
                            25 Tháng 8, 2019  02:47
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
                    <div className="partner-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title"><img src="../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                        <div className="group">
                            <p>% Tích <span>30%</span></p>
                            <p><img src="../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                        </div>
                        <div className="readmore text-right">
                            <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="news-item">
                        <div className="image">
                        <a href="#"><img src="../images/tin-tuc-1.jpg" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?</a>
                        <div className="date-added">
                            25 Tháng 8, 2019  02:47
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
                    <div className="partner-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title"><img src="../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                        <div className="group">
                            <p>% Tích <span>30%</span></p>
                            <p><img src="../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                        </div>
                        <div className="readmore text-right">
                            <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="news-item">
                        <div className="image">
                        <a href="#"><img src="../images/tin-tuc-1.jpg" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title">Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?</a>
                        <div className="date-added">
                            25 Tháng 8, 2019  02:47
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
                    <div className="partner-item">
                        <div className="image">
                        <a href="#"><img src="../images/doitac-img.png" alt="" /></a>
                        </div>
                        <div className="description">
                        <a href="#" className="title"><img src="../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                        <div className="group">
                            <p>% Tích <span>30%</span></p>
                            <p><img src="../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                        </div>
                        <div className="readmore text-right">
                            <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
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
        </main>
		<Footer/>
      </Layout>
    );
  }
}

export default SearchResultPage;