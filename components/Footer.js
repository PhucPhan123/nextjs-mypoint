import React, { Component } from "react";

const Footer = () => {
    return (
        <>
            <footer id="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="#"><img src="../images/logo.svg" alt="" className="logo" /></a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="address">
                                <h3 className="heading-footer">Thông tin liên hệ</h3>
                                <p><b>Địa chỉ</b><br />144 Đội Cấn, Ba Đình, Hà Nội</p>
                                <p><b>Email</b><br /><a href="mailto:">cskh@mypoint.net</a></p>
                                <p><b>Điện thoại</b><br /><a href="tel:012 345 6789">012 345 6789</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="infomation">
                                <h3 className="heading-footer">Liên kết</h3>
                                <ul className="list-infor">
                                    <li><a href="#">Về MyPoint</a></li>
                                    <li><a href="#">Tin tức khuyến mãi</a></li>
                                    <li><a href="#">Voucher</a></li>
                                    <li><a href="#">Đối tác liên kết</a></li>
                                    <li><a href="#">Hướng dẫn</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3 className="heading-footer">Kết nối với chúng tôi</h3>
                            <div className="group-icon-footer">
                                <a href="#"><img src="../images/google.png" alt="" /></a>
                                <a href="#"><img src="../images/facebook.png" alt="" /></a>
                            </div>
                            <h3 className="heading-footer">Tải ứng dụng Mypoint</h3>
                            <div className="group-icon-footer">
                                <a href="#"><img src="../images/android.png" alt="" className="install" /></a>
                                <a href="#"><img src="../images/ios.png" alt=""className="install" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="f-bot-list">
                                <li><a href="#">Quy Chế Hoạt Động</a></li>
                                <li><a href="#">Điều kiện – Điều khoản</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <div className="copyright text-right">
                                Copyright © 2019 by <a href="#">Mobifone</a>. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
};

export default Footer;