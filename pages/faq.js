import React, { Component } from "react";
import Layout from "../components/Layout.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class FaqPage extends Component{
    static pageTransitionDelayEnter = true;
    state = {};
    
    render() {
      return (
        <Layout title="My Point FAQ">
            <Navbar/>
            <main id="main">
            <div className="bg-paralex" style={{backgroundImage: 'url("../images/about-bg.jpg")'}}>
                <h2 className="page-title">Câu hỏi thường gặp</h2>
            </div>
            <div className="main-content">
                <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                    <div className="aside-left">
                        <div className="box-category">
                        <div className="heading-title">
                            <h2>Tài khoản/thẻ</h2>
                        </div>
                        <div className="list-cate">
                            <div>
                            <a href="#">Tích lũy và sử dụng điểm</a>
                            </div>
                            <div>
                            <a href="#">Chương trình Kết nối dài lâu của MobiFone sang MyPoint</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-9">
                    <div id="accordion">
                        <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1. Những ai được đăng ký tham gia chương trình?
                            </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                            Tất cả các khách hàng là tổ chức được thành lập hợp pháp hoặc cá nhân đủ 18 tuổi và có giấy tờ tùy thân hợp lệ đều có thể đăng ký tham gia Chương Trình
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2. Thẻ MyPoint có hết hạn không?
                            </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                            Tất cả các khách hàng là tổ chức được thành lập hợp pháp hoặc cá nhân đủ 18 tuổi và có giấy tờ tùy thân hợp lệ đều có thể đăng ký tham gia Chương Trình
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3. Tôi có thể đăng ký phát hành thẻ qua những kênh nào?
                            </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                            Tất cả các khách hàng là tổ chức được thành lập hợp pháp hoặc cá nhân đủ 18 tuổi và có giấy tờ tùy thân hợp lệ đều có thể đăng ký tham gia Chương Trình
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

export default FaqPage;