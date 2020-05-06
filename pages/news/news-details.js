import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

class NewsDetailsPage extends Component{
  static pageTransitionDelayEnter = true;
  state = {};
  
  componentDidMount = () => {
  
  };
  
  render () {
    return (
      <Layout title="Tin tức chi tiết">
        <Navbar/>
		<main id="main">
            <div className="bg-paralex-rx" style={{backgroundImage: 'url("../../images/siro.png")'}}>
            <div className="bg-paralex-rx-black">
            </div>
            <div className="container">
                <div className="bg-prl">
                <div className="date-added">28 Tháng 11, 2019</div>
                <h2 className="news-title">Nhà có 6 hương vị đá xay, mùa hè không còn đáng ghét nữa</h2>
                </div>
            </div>
            </div>
            <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="content-detail">
                  <h4>Đến Nhà sao không gọi ngay Đá Xay?</h4>
                  <p>Team đá xay giờ đâu cần phải quá “lắng lo”, vì ghiền mà sợ ngán thì đã có “biệt độ đá xay” mát lạnh của Nhà để đổi vị ngay. <br />
                    Giờ đây thèm ngọt mà thích cả tươi mát thì cookies, sô cô la và matcha đá xay chính là lựa chọn số 1. Chanh sả đá xay thì khỏi phải bàn cãi về độ thanh mát, chua chua thanh thanh kích thích vị giác đầy thú vị. Đặc biệt là team thích mát lạnh và bổ dưỡng, chắc chắn là phải gọi liền 2 ly ổi hồng việt quất đá xay và đào việt quất đá xay đang làm mưa làm gió trong mùa hè này tại Nhà.</p>
                  <p><img src="../../images/traxabg.jpg" alt="" /></p>
                  <p>Giờ đây thèm ngọt mà thích cả tươi mát thì cookies, sô cô la và matcha đá xay chính là lựa chọn số 1. Chanh sả đá xay thì khỏi phải bàn cãi về độ thanh mát, chua chua thanh thanh kích thích vị giác đầy thú vị. Đặc biệt là team thích mát lạnh và bổ dưỡng, chắc chắn là phải gọi liền 2 ly ổi hồng việt quất đá xay và đào việt quất đá xay đang làm mưa làm gió trong mùa hè này tại Nhà.</p>
                  <p>Giờ đây thèm ngọt mà thích cả tươi mát thì cookies, sô cô la và matcha đá xay chính là lựa chọn số 1. Chanh sả đá xay thì khỏi phải bàn cãi về độ thanh mát, chua chua thanh thanh kích thích vị giác đầy thú vị. Đặc biệt là team thích mát lạnh và bổ dưỡng, chắc chắn là phải gọi liền 2 ly ổi hồng việt quất đá xay và đào việt quất đá xay đang làm mưa làm gió trong mùa hè này tại Nhà.</p>
                  <p>Giờ đây thèm ngọt mà thích cả tươi mát thì cookies, sô cô la và matcha đá xay chính là lựa chọn số 1. Chanh sả đá xay thì khỏi phải bàn cãi về độ thanh mát, chua chua thanh thanh kích thích vị giác đầy thú vị. Đặc biệt là team thích mát lạnh và bổ dưỡng, chắc chắn là phải gọi liền 2 ly ổi hồng việt quất đá xay và đào việt quất đá xay đang làm mưa làm gió trong mùa hè này tại Nhà.</p>
                  <p>Giờ đây thèm ngọt mà thích cả tươi mát thì cookies, sô cô la và matcha đá xay chính là lựa chọn số 1. Chanh sả đá xay thì khỏi phải bàn cãi về độ thanh mát, chua chua thanh thanh kích thích vị giác đầy thú vị. Đặc biệt là team thích mát lạnh và bổ dưỡng, chắc chắn là phải gọi liền 2 ly ổi hồng việt quất đá xay và đào việt quất đá xay đang làm mưa làm gió trong mùa hè này tại Nhà.</p>
                  <p>Bạn thích món đá xay nào của Nhà, chia sẻ cho Nhà nghe nhé!</p>
                </div>
                <div>
                  <a href="#"><img src="../../images/like-footer.png" alt="" /></a>
                  <a href="#"><img src="../../images/share-faceboot.png" alt="" /></a>
                </div>
                <div className="news-lated">
                  <div className="heading-title">
                    <h2>Tin tức liên quan</h2>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="news-item">
                        <div className="image">
                          <a href="#"><img src="../../images/tin-tuc-1.jpg" alt="" /></a>
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
                      <div className="news-item">
                        <div className="image">
                          <a href="#"><img src="../../images/tin-tuc-2.jpg" alt="" /></a>
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
                      <div className="news-item">
                        <div className="image">
                          <a href="#"><img src="../../images/tin-tuc-3.jpg" alt="" /></a>
                        </div>
                        <div className="description">
                          <a href="#" className="title">Nhà có 6 hương vị đá xay, Bạn đã thưởng thức chưa?</a>
                          <div className="date-added">
                            25 Tháng 8, 2019  02:47
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="aside-left">
                  <div className="heading-title">
                    <h2>Có thể bạn quan tâm</h2>
                  </div>
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
                  <div className="hotdeals-item">
                    <div className="image">
                      <a href="#"><img src="../../images/hotdeal-2.png" alt="" /></a>
                    </div>
                    <div className="description">
                      <a href="#" className="title">Voucher giảm giá 30% hộp quà bánh Trung Thu</a>
                      <div className="group">
                        <a href="#"><img src="../../images/icon-starbuck.svg" alt="" /> &nbsp;&nbsp; Starbuck</a>
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

export default NewsDetailsPage;