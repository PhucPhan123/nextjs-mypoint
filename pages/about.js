import React, { Component } from "react";
import Layout from "../components/Layout.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class AboutPage extends Component{
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
            <Layout title="My Point Việt Nam">
                <Navbar/>
                <main id="main">
                    <div className="bg-paralex" style={{backgroundImage: 'url("../images/about-bg.jpg")'}}>
                    <h2 className="page-title">Giới thiệu về MyPoint</h2>
                    </div>
                    <div className="main-content">
                    <div className="container">
                        <div className="tab-list tab-custom" data-tab="#tab-content">
                        <a className="tab-list-item active" href="javascript:void(0)" data-tag="#tongquan">
                            Tổng quan
                        </a>
                        <a className="tab-list-item" href="javascript:void(0)" data-tag="#gioithieu">
                            Giới thiệu
                        </a>
                        <a className="tab-list-item" href="javascript:void(0)" data-tag="#huongdan">
                            Hướng dẫn
                        </a>
                        </div>
                    </div>
                    <div id="tab-content">
                        <div id="tongquan" className="tab-content wss">
                        <div className="tongquan-box-1">
                            <div className="container">
                            <div className="box-content">
                                <div className="infor">
                                <h3>MyPoint là gì?</h3>
                                <p>MyPoint là một Chương trình chăm sóc khách hàng bằng thẻ tích điểm dùng chung với sứ mệnh tạo ra một cộng đồng điểm chung- nơi người dùng được tích và sử dụng một loại điểm duy nhất- MyPoint  khi tiêu dùng tại hệ thống các cửa hàng trong cộng đồng.</p>
                                <p>Tại MyPoint, người dùng có thể tích điểm, tiêu điểm tại các cửa hàng trong cộng đồng điểm chung; cập nhật thông tin về ưu đãi hấp dẫn tại cửa hàng ưa thích; dùng điểm đổi lấy các vouchers, khuyến mãi từ các cửa hàng trên hệ thống. Tất cả các tiện ích trên đều được thực hiện thông qua một chiếc thẻ duy nhất, một loại điểm duy nhất: MyPoint. </p>
                                </div>
                                <div className="img">
                                <img src="../images/about-box-1-1.png" alt="" />
                                </div>
                            </div>
                            <div className="box-content">						
                                <div className="infor">
                                <p>Với mục tiêu khơi dậy Cuộc cách mạng Điểm thưởng tại Việt Nam, MyPoint mong muốn trở thành người bạn đồng hành tin cậy trong toàn bộ quá trình trải nghiệm mua sắm của khách hàng từ Ăn uống, Vận tải, Giải trí, Mua sắm đến Du lịch, Giáo dục, Thể thao, Công nghệ,.. giải quyết sự phân mảnh của điểm thưởng tại các nhãn hàng khác nhau- nguyên nhân chính dẫn đến sự hết hạn lãng phí của điểm thưởng hiện nay.</p>
                                <p>Với nền tảng công nghê thông minh giúp phân tích và thấu hiểu hành vi mua sắm của khách hàng, người dùng của MyPoint sẽ được trải nghiệm một ứng dụng mới lạ cùng với đó là sự quan tâm, chăm sóc và thấu hiểu tới từng nút chạm.</p>
                                </div>	
                                <div className="img">
                                <img src="../images/about-box-1-2.png" alt="" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="tongquan-box-2">
                            <img src="../images/about-box-2.png" alt="" />
                        </div>
                        <div className="tongquan-box-3">
                            <div className="container">
                            <div className="tb-responsive">
                                <div className="box-credit">
                                <div className="col-credit">
                                    <div className="box-credit-cart title">
                                    <div className="cart-icon" />
                                    <div className="cart-title">
                                        Phân hạng thẻ MyPoint
                                    </div>
                                    <div className="cart-content">
                                        <div>
                                        <p>Điều kiện lên hạng</p>
                                        </div>
                                        <div>
                                        <p>Điều kiện duy trì thẻ</p>
                                        </div>
                                        <div>
                                        <p>TÍCH ĐIỂM MYPOINT</p>
                                        <span>Tích điểm MyPoint với tỉ lệ vượt trội, lên hạng nhanh chóng.</span>
                                        </div>
                                        <div>
                                        <p>ƯU ĐÃI TỪ ĐỐI TÁC CỦA MYPOINT</p>
                                        <span>Tận hưởng những ưu đãi giá trị từ các đối tác liên kết</span>
                                        </div>
                                        <div>
                                        <p>HOTLINE HỖ TRỢ</p>
                                        <span>Hotline hỗ trợ riêng biệt, ưu tiên nhận sự trợ giúp</span>
                                        </div>
                                        <div>
                                        <p>ƯU ĐÃI ĐẶC BIỆT MỖI THÁNG</p>
                                        <span>Ưu đãi đặc biệt dành tặng riêng cho thành viên cao cấp</span>
                                        </div>
                                        <div>
                                        <p>DỊCH VỤ ĐỘC QUYỀN</p>
                                        <span>Tận hưởng các dịch vụ chăm sóc đặc quyền tại cửa hàng</span>
                                        </div>
                                        <div>
                                        <p>ĐẶC QUYỀN THAM DỰ SỰ KIỆN</p>
                                        <span>Trở thành một trong những người đầu tiên tham gia các chương trình, sự kiện đặc biệt đến từ MyPoint </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-credit">
                                    <div className="box-credit-cart">
                                    <div className="cart-icon">
                                        <img src="../images/Group-3.png" alt="" />
                                    </div>
                                    <div className="cart-title">
                                        <img src="../images/Membe-2r.png" alt="" />
                                    </div>
                                    <div className="cart-content">
                                        <div>
                                        <p>Tổng giá trị giao dịch <b>&lt; 20 triệu đồng</b></p>
                                        </div>
                                        <div>
                                        <p>Phát sinh ít nhất <b>01 giao dịch trong vòng 12 tháng.</b></p>
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                    </div>
                                </div>
                                <div className="col-credit">
                                    <div className="box-credit-cart">
                                    <div className="cart-icon">
                                        <img src="../images/Group-1.png" alt="" />
                                    </div>
                                    <div className="cart-title">
                                        <img src="../images/Member-3.png" alt="" />
                                    </div>
                                    <div className="cart-content">
                                        <div>
                                        <p>Tổng giá trị giao dịch<b> &lt; 20 triệu đồng</b></p>
                                        </div>
                                        <div>
                                        <p>Tổng giá trị giao dịch<b> &gt; 20 triệu đồng trong vòng 12 tháng liên tiếp</b></p>
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div />
                                        <div />
                                    </div>
                                    </div>
                                </div>
                                <div className="col-credit">
                                    <div className="box-credit-cart">
                                    <div className="cart-icon">
                                        <img src="../images/Group2.png" alt="" />
                                    </div>
                                    <div className="cart-title">
                                        <img src="../images/Member-1.png" alt="" />
                                    </div>
                                    <div className="cart-content">
                                        <div>
                                        <p>Tổng giá trị giao dịch<b> &gt; 80 triệu đồng.</b></p>
                                        </div>
                                        <div>
                                        <p>Tổng giá trị giao dịch<b> &gt; 80 triệu đồng trong vòng 12 tháng liên tiếp.</b></p>
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                        <div className="icon">
                                        <img src="../images/checked.png" alt="" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div id="gioithieu" className="tab-content wss">
                        <div className="tongquan-box-1">
                            <div className="container">
                            <div className="box-content">
                                <div className="infor">
                                <h3>Về MobiFone</h3>
                                <p>MobiFone là nhà cung cấp mạng thông tin di động đầu tiên và duy nhất tại Việt Nam được bình chọn là thương hiệu được khách hàng yêu thích trong 6 năm liên tiếp.</p>
                                <p>Với thông điệp "Kết nối giá trị- Khơi dậy tiềm năng", MobiFone cam kết hướng đến sự phát triển toàn diện và bền vững dựa trên ba mối quan hệ trụ cột: khách hàng, đối tác và  nhân viên. Để đạt được điều đó, MobiFone không ngừng cung cấp những chương trình các ưu đãi, dịch vụ thông tin di động với giá trị vượt trội như một lời tri ân đến các khách hàng thân thiết đã gắn bó với MobiFone.</p>
                                <p>Chưa dừng lại ở đó, MobiFone tiếp tục cải tiến chương trình chăm sóc khách hàng hiện tại của mình bằng cách ra đời MyPoint- Chương trình chăm sóc khách hàng thế hệ mới không chỉ dành cho thuê bao MobiFone mà tất cả các khách hàng sử dụng mạng di động trên toàn quốc.</p>
                                </div>
                                <div className="img">
                                <img src="../images/about-img-banner.png" alt="" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="sumenh-box">
                            <div className="container">
                            <div className="padding-box">
                                <h2 className="about-heading-title">Sứ mệnh của MobiFone tại MyPoint</h2>
                                <div className="baoquanh">
                                <div className="box-content2">
                                    <div className="img">
                                    <img src="../images/sumenh1.png" alt="" />
                                    </div>
                                    <div className="infor">
                                    <h3>Tạo đột phá</h3>
                                    <p>trong chương trình Chăm sóc khách hàng của MobiFone nói riêng và các doanh nghiệp trong cộng đồng nói chung.</p>
                                    </div>
                                </div>
                                <div className="box-content2">
                                    <div className="img">
                                    <img src="../images/sumenh2.png" alt="" />
                                    </div>
                                    <div className="infor">
                                    <h3>Tận dụng thương hiệu bền vững </h3>
                                    <p>và tập khách hàng rộng rãi, đóng vai trò chủ chốt và tiên phong trong việc xây dựng cộng đồng kết nối các doanh nghiệp và người dùng.</p>
                                    </div>
                                </div>
                                <div className="box-content2">
                                    <div className="img">
                                    <img src="../images/sumenh3.png" alt="" />
                                    </div>
                                    <div className="infor">
                                    <h3>Tận dụng tiềm lực tài chính vững mạnh</h3>
                                    <p>cam kết phát triển cộng đồng và mang lại giá trị bền vững cho các bên liên quan.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div id="huongdan" className="tab-content wss">
                        <div className="huondansudung">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                <div className="box-way">
                                    <div className="small-title">Cách 1</div>
                                    <div className="big-title">Đăng kí và nhận thẻ miễn phí tại cửa hàng</div>
                                    <p className="des">Đăng ký tại cửa hàng thuộc cộng đồng liên kết MyPoint:</p>
                                    <div className="way">
                                    <div className="stt"><span>1</span></div>
                                    <div className="infor">
                                        <div className="one">Đến cửa hàng</div>
                                        <div className="two">Đến cửa hàng gần nhất và yêu cầu đăng kí nhận thẻ MyPoint.</div>
                                        <div className="link"><a href="/partnership/store-list">Danh sách cửa hàng</a></div>
                                    </div>
                                    </div>
                                    <div className="way">
                                    <div className="stt"><span>2</span></div>
                                    <div className="infor">
                                        <div className="one">Cung cấp số điện thoại</div>
                                        <div className="two">Bật mí số điện thoại để nhân viên đăng ký tài khoản trên hệ thống.</div>
                                    </div>
                                    </div>
                                    <div className="way">
                                    <div className="stt"><span>3</span></div>
                                    <div className="infor">
                                        <div className="one">Nhận thẻ My Point</div>
                                        <div className="two">Nhận thẻ MyPoint từ nhân viên cửa hàng với một nụ cười rạng rỡ.</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-2">
                                <div className="border-d" />
                                </div>
                                <div className="col-md-5">
                                <div className="box-way">
                                    <div className="small-title">Cách 2</div>
                                    <div className="big-title">Đăng kí trực tuyến qua Website hoặc App</div>
                                    <p className="des" />
                                    <div className="way">
                                    <div className="stt"><span>1</span></div>
                                    <div className="infor">
                                        <div className="one">Truy cập Website hoặc tải ứng dụng</div>
                                        <div className="two">Truy cập Website hoặc tải ứng dụng trên App Store/Google Play.</div>
                                    </div>
                                    </div>
                                    <div className="way">
                                    <div className="stt"><span>2</span></div>
                                    <div className="infor">
                                        <div className="one">Điền thông tin</div>
                                        <div className="two">Điền số điện thoại, nhập mã OTP và cài đặt mã PIN.</div>
                                    </div>
                                    </div>
                                    <div className="way">
                                    <div className="stt"><span>3</span></div>
                                    <div className="infor">
                                        <div className="one">Nhận thẻ My Point</div>
                                        <div className="two">Nhận thẻ MyPoint từ nhân viên cửa hàng với một nụ cười rạng rỡ.</div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="sudungthe">
                            <div className="container">
                            <h2 className="about-heading-title">Hướng dẫn sử dụng thẻ MyPoint</h2>
                            <div className="border-10">
                                <img src="../images/banner-sudung.jpg" alt="" />
                            </div>
                            <div className="box-sudungthe">
                                <h3 className="title">Hướng dẫn tích, tiêu điểm MyPoint</h3>
                                <div className="guide-box">
                                <div className="guide">
                                    <div className="img">
                                    <img src="../images/shop-cart.png" alt="" />
                                    </div>
                                    <div className="line"><span className="tron" /></div>
                                    <div className="infor">
                                    <p>
                                        Mua sắm tại cửa hàng thuộc danh sách các đối tác liên kết của MyPoint.
                                    </p>
                                    <a href="#">Danh sách cửa hàng</a>
                                    </div>
                                </div>
                                <div className="guide">
                                    <div className="img">
                                    <img src="../images/wireless-payment-credit-card.png" alt="" />
                                    </div>
                                    <div className="line"><span className="tron" /></div>
                                    <div className="infor">
                                    <p>
                                        Tại quầy thanh toán, đưa nhân viên thu ngân thẻ thành viên hoặc mã code trong ứng dụng
                                    </p>
                                    </div>
                                </div>
                                <div className="guide">
                                    <div className="img">
                                    <img src="../images/barcode-scan.png" alt="" />
                                    </div>
                                    <div className="line"><span className="tron" /></div>
                                    <div className="infor">
                                    <p>
                                        Nhân viên thu ngân quét mã của người dùng để tích/ tiêu điểm
                                    </p>
                                    </div>
                                </div>
                                <div className="guide">
                                    <div className="img">
                                    <img src="../images/credit-card-check.png" alt="" />
                                    </div>
                                    <div className="line"><span className="tron" /></div>
                                    <div className="infor">
                                    <p>
                                        Tích/ tiêu điểm thành công. Người dùng kiểm tra số dư thay đổi tại ứng dụng
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="box-sudungthe">
                                <h3 className="title">Hướng dẫn sử dụng ưu đãi MyPoint</h3>
                                <div className="guide-box">
                                <div className="guide">
                                    <div className="img">
                                    <img src="../images/discount-coupon.png" alt="" />
                                    </div>
                                    <div className="line"><span className="tron" /></div>
                                    <div className="infor">
                                    <p>
                                        Tại cửa hàng chấp nhận ưu đãi, mở ứng dụng --&gt; Ưu đãi của tôi --&gt; Lựa chọn ưu đãi muốn sử dụng 
                                    </p>
                                    </div>
                                </div>
                                <div className="guide">
                                    <div className="img">
                                    <img src="../images/qr-code-scan.png" alt="" />
                                    </div>
                                    <div className="line"><span className="tron" /></div>
                                    <div className="infor">
                                    <p>
                                        Người dùng quét mã QR tĩnh tại cửa hàng
                                    </p>
                                    </div>
                                </div>
                                <div className="guide">
                                    <div className="img">
                                    <img src="../images/mobile-shopping-shop-hand.png" alt="" />
                                    </div>
                                    <div className="line"><span className="tron" /></div>
                                    <div className="infor">
                                    <p>
                                        Quét mã thành công, người dùng đưa mã voucher nhận được cho nhân viên thu ngân
                                    </p>
                                    </div>
                                </div>
                                <div className="guide">
                                    <div className="img">
                                    <img src="../images/coupon-cut.png" alt="" />
                                    </div>
                                    <div className="line"><span className="tron" /></div>
                                    <div className="infor">
                                    <p>
                                        Sử dụng ưu đãi thành công
                                    </p>
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
};

export default AboutPage;