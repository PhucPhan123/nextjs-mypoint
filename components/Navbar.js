import React, { Component } from "react";
import Link from 'next/link'

class Navbar extends Component{
    static pageTransitionDelayEnter = true;
    state = {};
    componentDidMount = () => {
        $(window).on('load', function(event) {
            $('#loader').delay(1000).fadeOut('fast');
        });
    };

    render () {
        return (
            <>
                <div id="loader"><span className="fas fa-spinner xoay icon"></span></div>
                <div id="closeMenu"></div>
                <header id="main-header">
                    <div className="container-fluid">
                        <div className="row align-center">
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-4">
                                <div className="logo">
                                    <a href="/"><img src="../images/logo.svg" alt="" className="img-fluid" /></a>
                                </div>
                            </div>
                            <div className="col-xl-6 menu-responsive">
                                <div id="main-menu">
                                    <ul className="menu-root">
                                        <li className="logo-mobile">
                                            <a href="/"><img src="../images/logo.svg" alt="" className="img-fluid" /></a>
                                        </li>
                                        <li className="root active">
                                            <a href="/about">Về MyPoint</a>
                                        </li>
                                        <li className="root">
                                            <a href="/news/news-list">Tin tức</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Menu 1</a>
                                                    <ul>
                                                <li>
                                                    <a href="#">Menu 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">Menu 2</a>
                                                </li>
                                            </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Menu 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="root">
                                            <a href="/promotion">Ưu đãi</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Menu 1</a>
                                                </li>
                                                <li>
                                                    <a href="#">Menu 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="root">
                                            <a href="/partnership/partner">Đối tác liên kết</a>
                                        </li>
                                        <li className="root">
                                            <a href="#">Hướng dẫn</a>
                                        </li>
                                        <li className="root">
                                            <a href="#">Liên hệ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-5 col-md-4 col-sm-4 col-6">
                                <div className="search">
                                    <input type="text" className="input_search" placeholder="Tìm kiếm" />
                                    <a href="#" className="btn_search"><i className="fal fa-search"></i></a>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block text-right">
                                <div className="group_login">
                                    <a href="/auth/register" className="register" id="register">Đăng ký</a>
                                    <a href="/auth/login" className="login" id="login">Đăng nhập</a>
                                </div>
                            </div>
                            <div className="d-xl-none col-lg-1 col-md-1 col-sm-1 col-2 text-right">
                                <a href="#" id="openMyMenu"><i className="far fa-bars"></i></a>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );

    }
}
export default Navbar;