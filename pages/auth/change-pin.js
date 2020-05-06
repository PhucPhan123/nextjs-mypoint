import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";

class ChangePinPage extends Component{
  static pageTransitionDelayEnter = true;
  state = {};
  
  componentDidMount = () => {
  
  };
  
  render () {
    return (
      <Layout title="Đổi mã PIN">
        <Navbar/>
		<div className="box-lg-resister">
            <div className="container">
            <div className="box-bg">
                <div className="row">
                <div className="col-sm-6">
                    <div className="box-left">
                    <div className="img-home">
                        <a href="home.html">
                        <img src="../../../images/login.svg" alt="" />
                        </a>
                    </div>
                    <h3 className="lg-rs-title">Đổi mã pin </h3>
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
                        <div className="form-group">
                        <div className="custom-input">
                            <input type="text" className="form-control" placeholder="Nhập mã PIN cũ" />
                            <i className="far fa-eye" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="custom-input">
                            <input type="text" className="form-control" placeholder="Nhập mã PIN mới" />
                            <i className="far fa-eye" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="custom-input">
                            <input type="text" className="form-control" placeholder="Nhập lại PIN mới" />
                            <i className="far fa-eye" />
                        </div>
                        </div>
                        <button type="submit" className="btn btn-gray btn-flex">Hoàn tất <i className="far fa-angle-right" /></button>
                        <small className="small-sub">"Mã Pin phải bao gồm 6 số"</small>
                    </form>
                    <p className="note"><b>*Lưu ý:</b> Mã pin là 6 số, không chữ, không ký tự đặc biệt</p>
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

export default ChangePinPage;