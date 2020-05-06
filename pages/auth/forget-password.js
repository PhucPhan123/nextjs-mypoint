import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

class ForgetPasswordPage extends Component{
  static pageTransitionDelayEnter = true;
  state = {};
  
  componentDidMount = () => {
  
  };
  
  render () {
    return (
      <Layout title="Quên Mật Khẩu">
        <Navbar/>
		<div className="box-lg-resister">
            <div className="container">
          <div className="box-bg">
            <div className="row">
              <div className="col-sm-6">
                <div className="box-left">
                  <div className="img-home">
                    <a href="home.html">
                      <img src="../../images/login.svg" alt="" />
                    </a>
                  </div>
                  <div className="infor-step">
                    <div className="title">
                      <h3 className="lg-rs-title active" data-step="#step-1">Lấy lại mã Pin</h3>
                      <h3 className="lg-rs-title" data-step="#step-2">Xác thực OTP</h3>
                    </div>
                    <div className="group-bar">
                      <div className="bar active" data-step="#step-1" />
                      <div className="bar" data-step="#step-2" />
                    </div>
                  </div>
                  <p>Quý khách vui lòng điền chính xác tất cả các thông tin dưới đây để đảm bảo nhận đầy đủ mọi quyền lợi, thông tin ưu đãi dành riêng cho khách hàng của MyPoint.</p>
                </div>					
              </div>
              <div className="col-sm-6">
                <div className="box-right">
                  <div className="img-logo">
                    <a href="home.html">
                      <img src="../../images/logo.svg" alt="" />
                    </a>
                    <a href="#" className="float-right back">Quay lại</a>
                  </div>
                  <form action>
                    <div className="box-step">
                      <div className="step active" id="step-1">
                        <div className="form-group">
                          <label htmlFor>Số điện thoại</label>
                          <input type="text" className="form-control" placeholder="Nhập số điện thoại" />
                        </div>
                        <a className="btn btn-gray btn-flex change_step" data-step="#step-2">Tiếp theo <i className="far fa-angle-right" /></a>
                      </div>
                      <div className="step" id="step-2">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Nhập mã OTP" />
                        </div>
                        <small className="small-sub">"Mã Pin phải bao gồm 6 số"</small>
                        <a className="btn btn-gray btn-flex change_step" data-step>Tiếp theo <i className="far fa-angle-right" /></a>
                        <a href="#" className="back">Gửi lại mã OTP</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
		<Footer/>
      </Layout>
    );
  }
}

export default ForgetPasswordPage;