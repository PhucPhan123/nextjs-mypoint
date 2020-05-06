import React, { Component } from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/dist/css/fonts.css" />
        <link rel="stylesheet" href="/dist/css/all.min.css" />
        <link rel="stylesheet" href="/dist/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/dist/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/dist/css/style.css" />
        <link rel="stylesheet" href="/dist/css/style_responsice.css" />
        <script
          type="text/javascript"
          src="/dist/js/jquery-3.4.1.min.js"
        ></script>
        <script type="text/javascript" src="/dist/js/bootstrap.min.js"></script>
        <script
          type="text/javascript"
          src="/dist/js/owl.carousel.min.js"
        ></script>
      </Head>
      {props.children}
    </>
  );
};

export default Layout;
