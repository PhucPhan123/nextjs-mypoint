import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import fetch from "isomorphic-unfetch";

class LoginPage extends Component {
  state = { phoneNumber: "", password: "", error: "" };
  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.apiEndpoint}/8854/gup2start/rest/accountLogin/1.0.0`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: this.state.phoneNumber,
          password: this.state.password,
        }),
      }
    );
  };
  handlePhoneChange = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <Layout title="Đăng nhập">
        <div className="box-lg-resister">
          <div className="container">
            <div className="box-bg">
              <div className="row">
                <div className="col-sm-6">
                  <div className="box-left">
                    <div className="img-home">
                      <a href="home.html">
                        <img src="/images/login.svg" alt="" />
                      </a>
                    </div>
                    <h3 className="lg-rs-title">Đăng nhập</h3>
                    <p>
                      Quý khách vui lòng điền chính xác tất cả các thông tin
                      dưới đây để đảm bảo nhận đầy đủ mọi quyền lợi, thông tin
                      ưu đãi dành riêng cho khách hàng của MyPoint.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="box-right">
                    <div className="img-logo">
                      <a href="/">
                        <img src="/images/logo.svg" alt="" />
                      </a>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="">Số điện thoại</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nhập số điện thoại"
                          value={this.state.phoneNumber}
                          onChange={this.handlePhoneChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Mã pin</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Nhập mã pin"
                          value={this.state.password}
                          onChange={this.handlePasswordChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-gray btn-flex">
                        Đăng nhập <i className="far fa-angle-right"></i>
                      </button>
                    </form>
                    <div className="group-btn">
                      <a href="/auth/forget-password">Lấy lại mã pin</a>
                      <a href="/auth/register">Đăng ký</a>
                    </div>
                    <small className="small-sub">{this.state.error}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default LoginPage;
