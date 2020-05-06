import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import fetch from "isomorphic-unfetch";

class RegisterPage extends Component {
  state = { phoneNumber: "", password: "", error: "" };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "Form submitted with the following values to",
      process.env.apiEndpoint
    );

    const response = await fetch(
      `${process.env.apiEndpoint}/1/gup2start/rest/accountLogin/1.0.0`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        body: JSON.stringify({
          username: this.state.phoneNumber,
          password: this.state.password,
        }),
      }
    );

    console.log(response);
  };
  handlePhoneChange = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <Layout title="Đăng ký">
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
                    <div className="infor-step">
                      <div className="title">
                        <h3 className="lg-rs-title active" data-step="#step-1">
                          Đăng ký tài khoản
                        </h3>
                        <h3 className="lg-rs-title" data-step="#step-2">
                          Xác thực OTP
                        </h3>
                        <h3 className="lg-rs-title" data-step="#step-3">
                          Tạo mã PIN mới
                        </h3>
                      </div>
                      <div className="group-bar">
                        <div className="bar active" data-step="#step-1"></div>
                        <div className="bar" data-step="#step-2"></div>
                        <div className="bar" data-step="#step-3"></div>
                      </div>
                    </div>
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
                      <a href="home.html">
                        <img src="/images/logo.svg" alt="" />
                      </a>
                    </div>
                    <form action="">
                      <div className="box-step">
                        <div className="step active" id="step-1">
                          <div className="form-group">
                            <label htmlFor="">Số điện thoại</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nhập số điện thoại"
                            />
                          </div>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheck1"
                            >
                              Tôi đồng ý với các điều kiện, điều khoản của
                              MyPoint.
                            </label>
                          </div>
                          <a
                            className="btn btn-gray btn-flex change_step"
                            data-step="#step-2"
                          >
                            Tiếp theo <i className="far fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="step" id="step-2">
                          <a
                            href="#"
                            className="back abs change_step"
                            data-step="#step-1"
                          >
                            Quay lại
                          </a>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nhập mã OTP"
                            />
                          </div>
                          <small className="small-sub">
                            "Mã Pin phải bao gồm 6 số"
                          </small>
                          <a
                            className="btn btn-gray btn-flex change_step"
                            data-step="#step-3"
                          >
                            Tiếp theo <i className="far fa-angle-right"></i>
                          </a>
                          <a href="#" className="back">
                            Gửi lại mã OTP
                          </a>
                        </div>
                        <div className="step" id="step-3">
                          <a
                            href="#"
                            className="back abs change_step"
                            data-step="#step-2"
                          >
                            Quay lại
                          </a>
                          <div className="form-group">
                            <div className="custom-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập mã PIN mới"
                              />
                              <i className="far fa-eye"></i>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="custom-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập lại PIN mới"
                              />
                              <i className="far fa-eye"></i>
                            </div>
                          </div>

                          <a
                            className="btn btn-gray btn-flex change_step"
                            data-step=""
                          >
                            Tiếp theo <i className="far fa-angle-right"></i>
                          </a>
                          <small className="small-sub">
                            "Mã Pin phải bao gồm 6 số"
                          </small>
                          <p className="note">
                            <b>*Lưu ý:</b> Mã pin là 6 số, không chữ, không ký
                            tự đặc biệt
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </Layout>
    );
  }
}

export default RegisterPage;
