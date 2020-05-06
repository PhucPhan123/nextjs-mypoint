import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import axios from 'axios';

class PartnerPage extends Component{
  static pageTransitionDelayEnter = true;
  constructor(props) {
    super(props)

    this.state = {
        brands:[
            {
                "brand_id": "32",
                "store_count": "17",
                "organization_id": "23",
                "organization_code": "GOLDENGATE",
                "organization_name": "Tập đoàn Golden Gate",
                "brand_code": "Gogi House",
                "brand_name": "Gogi House",
                "contact_name": "Nguyen Van A",
                "phone": "024 7300 7354",
                "mobile": "024 7300 7354",
                "fax": "",
                "email": "support.hn@ggg.com.vn",
                "address1": "14 Giang Văn Minh, Kim Mã, Ba Đình, Hà Nội 100000",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "16972",
                "city": "Thành phố Hà Nội",
                "country": "Viet Nam",
                "website": "https://gogi.com.vn/",
                "category": {
                    "id": "1",
                    "category_code": "FOOD",
                    "category_name": "Food",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3DB998CE10B3DCF083833FE31847AA3E/1585245048"
                },
                "point_accumulation_rate": "8.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/A085F27337D1EBB72C7D35CA9592CEDA/1585245048",
                "images": [
                    {
                        "id": "18",
                        "type": "COVER",
                        "caption": "gogi house",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/689F26345E9434BE1EE466BD3B55B7A5/1585245048"
                    },
                    {
                        "id": "22",
                        "type": "BACKGROUND",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/FB827F3F9C3DC696D0E3F58C6E9A1602/1585245048"
                    },
                    {
                        "id": "23",
                        "type": "BACKGROUND",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/D190B198084082E3A91C42867814832D/1585245048"
                    },
                    {
                        "id": "24",
                        "type": "BACKGROUND",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/17265B4BF641048550DDBF2B258123B8/1585245048"
                    }
                ]
            },
            {
                "brand_id": "28",
                "store_count": "16",
                "organization_id": "26",
                "organization_code": "The Coffee house",
                "organization_name": "The Coffee house",
                "brand_code": "The Coffee house",
                "brand_name": "The Coffee House",
                "contact_name": "Nguyen Van A",
                "phone": "(84-28) 73 039 079",
                "mobile": "",
                "fax": "",
                "email": "thecoffeehouse@gmail.com",
                "address1": "Tầng 1, Toà nhà Richland Southern, 181, Cầu Giấy, P. Dịch Vọng, Q. Cầu Giấy, Tp. Hà Nội",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "0",
                "city": "",
                "country": "Viet Nam",
                "website": "https://www.thecoffeehouse.com/",
                "category": {
                    "id": "1",
                    "category_code": "FOOD",
                    "category_name": "Food",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3DB998CE10B3DCF083833FE31847AA3E/1585245048"
                },
                "point_accumulation_rate": "10.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/D794685CB11A3FA17FBB9CB6F4AD6620/1585245048",
                "images": [
                    {
                        "id": "29",
                        "type": "BACKGROUND",
                        "caption": "The coffee house",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/271CBBB8DBE874D7E5CBAA026A977F96/1585305330"
                    },
                    {
                        "id": "30",
                        "type": "BACKGROUND",
                        "caption": "The Coffee House",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/78AAF2A1ACBB22C73C403592F4082964/1585305358"
                    },
                    {
                        "id": "31",
                        "type": "BACKGROUND",
                        "caption": "The Coffee House",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/394B4F1AACB679C33E527CFC9D59D445/1585305380"
                    },
                    {
                        "id": "32",
                        "type": "BACKGROUND",
                        "caption": "The Coffee House",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3F8C2C8BDD100D6259D01C33799C4A16/1585304933"
                    }
                ]
            },
            {
                "brand_id": "30",
                "store_count": "15",
                "organization_id": "24",
                "organization_code": "Starbucks",
                "organization_name": "Tập đoàn Starbucks",
                "brand_code": "Starbucks",
                "brand_name": "Starbucks",
                "contact_name": "Nguyen Van A",
                "phone": "+842439368407",
                "mobile": "+842439368407",
                "fax": "",
                "email": "customerservice@coffee-concepts.com.vn",
                "address1": "32 Hang Bai street, Hoan Kiem district, Hanoi, 100000, Vietnam",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "16998",
                "city": "",
                "country": "Viet Nam",
                "website": "https://www.starbucks.vn/",
                "category": {
                    "id": "1",
                    "category_code": "FOOD",
                    "category_name": "Food",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3DB998CE10B3DCF083833FE31847AA3E/1585245048"
                },
                "point_accumulation_rate": "15.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/679D32A1764DFC0450FE6472CEC145CA/1585245048",
                "images": [
                    {
                        "id": "25",
                        "type": "BACKGROUND",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/58DF248E2B31C2AABE19805320102674/1585282571"
                    },
                    {
                        "id": "26",
                        "type": "BACKGROUND",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3A6F47058153CB712503BFD1AC5FB061/1585282587"
                    },
                    {
                        "id": "27",
                        "type": "BACKGROUND",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/D813D35EDB080C8E51B05E4F51CCA94B/1585282602"
                    },
                    {
                        "id": "28",
                        "type": "COVER",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/531A02ADB24E19CB82761A18E74C5FD9/1585283228"
                    }
                ]
            },
            {
                "brand_id": "27",
                "store_count": "14",
                "organization_id": "25",
                "organization_code": "Lotte",
                "organization_name": "Tập Đoàn Lotte",
                "brand_code": "Lotte",
                "brand_name": "Lotte Cinema",
                "contact_name": "Nguyen Van A",
                "phone": "024 3945 4999",
                "mobile": "",
                "fax": "",
                "email": "LotteCinema@gmail.com",
                "address1": "Big C Thăng Long, 222 Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "0",
                "city": "",
                "country": "Viet Nam",
                "website": "http://lottecinemavn.com/LCHS/index.aspx",
                "category": {
                    "id": "2",
                    "category_code": "ENTERTAINMENT",
                    "category_name": "Entertainment",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/398029CA95925D63230F9661A76DCECD/1585245048"
                },
                "point_accumulation_rate": "0.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/DF98F2FFED713D3CE88DE74FDE397CC2/1585245048",
                "images": [
                    {
                        "id": "121",
                        "type": "COVER",
                        "caption": "Lotte Cinema",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/B26936A0CFFDD2D6D9BAE0CED892A543/1585475130"
                    },
                    {
                        "id": "122",
                        "type": "BACKGROUND",
                        "caption": "Lotte Cinema",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/7C1420FA2AC6DA1AFA939C4A63B63FEA/1585475183"
                    },
                    {
                        "id": "123",
                        "type": "BACKGROUND",
                        "caption": "Lotte Cinema",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/D091346312D6E994297387D1820F54EF/1585475709"
                    },
                    {
                        "id": "124",
                        "type": "BACKGROUND",
                        "caption": "Lotte Cinema",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/694CAD7CD8A85A6273DEBBB4BDA663DF/1585475726"
                    }
                ]
            },
            {
                "brand_id": "33",
                "store_count": "14",
                "organization_id": "23",
                "organization_code": "GOLDENGATE",
                "organization_name": "Tập đoàn Golden Gate",
                "brand_code": "Kichi-Kichi",
                "brand_name": "Kichi-Kichi",
                "contact_name": "Nguyen Van A",
                "phone": "024 6262 0368",
                "mobile": "",
                "fax": "",
                "email": "KiChiKiChi@gmail.com",
                "address1": "B2-R4-37 Royal City, Ngõ 72 - Nguyễn Trãi, Thanh Xuân, Hà Nội 100000",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "0",
                "city": "",
                "country": "Viet Nam",
                "website": "https://kichi.com.vn/en/",
                "category": {
                    "id": "1",
                    "category_code": "FOOD",
                    "category_name": "Food",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3DB998CE10B3DCF083833FE31847AA3E/1585245048"
                },
                "point_accumulation_rate": "0.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/60C14CED6C6850DC74D410CF45BAECCF/1585245048",
                "images": [
                    {
                        "id": "15",
                        "type": "COVER",
                        "caption": "Kichi kichi",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/60C14CED6C6850DC74D410CF45BAECCF/1585245048"
                    }
                ]
            },
            {
                "brand_id": "29",
                "store_count": "9",
                "organization_id": "27",
                "organization_code": "Cộng Cà Phê",
                "organization_name": "Cộng Cà Phê",
                "brand_code": "Cộng Cà Phê",
                "brand_name": "Cộng Cà Phê",
                "contact_name": "Nguyen Van A",
                "phone": "(84-24) 62 975 626",
                "mobile": "",
                "fax": "",
                "email": "congcaphe@gmail.com",
                "address1": "101 A5, Vạn Phúc, P. Liễu Giai, Q. Ba Đình, Tp. Hà Nội",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "0",
                "city": "",
                "country": "Viet Nam",
                "website": "https://www.congcaphe.com/",
                "category": {
                    "id": "1",
                    "category_code": "FOOD",
                    "category_name": "Food",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3DB998CE10B3DCF083833FE31847AA3E/1585245048"
                },
                "point_accumulation_rate": "100.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/E8F5C53EC930511D7CC6101254266262/1585245048",
                "images": [
                    {
                        "id": "14",
                        "type": "COVER",
                        "caption": "Logo Cộng",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/E8F5C53EC930511D7CC6101254266262/1585245048"
                    },
                    {
                        "id": "33",
                        "type": "COVER",
                        "caption": "Cộng Cà Phê banner",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/018A43B88ABA90F5DFCBEEF6619A7AA9/1585306760"
                    },
                    {
                        "id": "34",
                        "type": "BACKGROUND",
                        "caption": "Cộng Cà Phê",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/40B2B8416D08DF3D04514F1C6F6B5A70/1585306800"
                    },
                    {
                        "id": "35",
                        "type": "BACKGROUND",
                        "caption": "Cộng Cà Phê",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/FE20837ADE7BC94DB571E27CECFC2F55/1585306822"
                    },
                    {
                        "id": "36",
                        "type": "BACKGROUND",
                        "caption": "Cộng Cà Phê",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/12D8C1F88B28FEE7F6532AE87F7CD238/1585306845"
                    }
                ]
            },
            {
                "brand_id": "24",
                "store_count": "8",
                "organization_id": "23",
                "organization_code": "GOLDENGATE",
                "organization_name": "Tập đoàn Golden Gate",
                "brand_code": "Manwah",
                "brand_name": "Manwah",
                "contact_name": "Nguyen Van A",
                "phone": "0987654329",
                "mobile": "0987654329",
                "fax": "",
                "email": "manwah@gmail.com",
                "address1": "",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "0",
                "city": "Thành phố Hà Nội",
                "country": "Viet Nam",
                "website": "manwah.com.vn",
                "category": {
                    "id": "1",
                    "category_code": "FOOD",
                    "category_name": "Food",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3DB998CE10B3DCF083833FE31847AA3E/1585245048"
                },
                "point_accumulation_rate": "100.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/071F77288720D6F86DCF6156ED9C7658/1585245048",
                "images": [
                    {
                        "id": "10",
                        "type": "COVER",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/071F77288720D6F86DCF6156ED9C7658/1585245048"
                    },
                    {
                        "id": "109",
                        "type": "COVER",
                        "caption": "Manwah",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/01F950B8BAE44C5F5BA76201501977E2/1585472870"
                    },
                    {
                        "id": "110",
                        "type": "BACKGROUND",
                        "caption": "Manwah",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/793A788152DCEF8B50E2F047A775A5D0/1585472889"
                    },
                    {
                        "id": "111",
                        "type": "BACKGROUND",
                        "caption": "Manwah",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/A5397541189B1E98FD37A9EAFB1231B1/1585472908"
                    },
                    {
                        "id": "112",
                        "type": "BACKGROUND",
                        "caption": "Manwah",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/8B326AC91D41EDE524A7526967D59420/1585472925"
                    }
                ]
            },
            {
                "brand_id": "25",
                "store_count": "6",
                "organization_id": "25",
                "organization_code": "Lotte",
                "organization_name": "Tập Đoàn Lotte",
                "brand_code": "Lotte",
                "brand_name": "Lotteria",
                "contact_name": "Nguyen Van A",
                "phone": "(84-24) 38 378 218",
                "mobile": "(84-24) 38 378 218",
                "fax": "",
                "email": "marketing@lotteria.vn",
                "address1": "",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "13200",
                "city": "",
                "country": "Viet Nam",
                "website": "http://www.lotteria.vn/",
                "category": {
                    "id": "1",
                    "category_code": "FOOD",
                    "category_name": "Food",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3DB998CE10B3DCF083833FE31847AA3E/1585245048"
                },
                "point_accumulation_rate": "10.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/4CF36418ABB1DBE58CD170E7C18AEDF9/1585245048",
                "images": [
                    {
                        "id": "8",
                        "type": "COVER",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/4CF36418ABB1DBE58CD170E7C18AEDF9/1585245048"
                    },
                    {
                        "id": "113",
                        "type": "COVER",
                        "caption": "Lotteria",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/F0F0FCA65E256F766AAD4B02CBBFDD0D/1585473365"
                    },
                    {
                        "id": "114",
                        "type": "BACKGROUND",
                        "caption": "Lotteria",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/A1833AD74908379A23E28F702C991A99/1585473388"
                    },
                    {
                        "id": "115",
                        "type": "BACKGROUND",
                        "caption": "Lotteria",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/3C4FDAB81B350EAACB81028DBE01817C/1585473402"
                    },
                    {
                        "id": "116",
                        "type": "BACKGROUND",
                        "caption": "Lotteria",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/8158BC702D0C8DEC109EC88DDCCB804F/1585473418"
                    }
                ]
            },
            {
                "brand_id": "26",
                "store_count": "6",
                "organization_id": "25",
                "organization_code": "Lotte",
                "organization_name": "Tập Đoàn Lotte",
                "brand_code": "Lotte",
                "brand_name": "Lotte Mart",
                "contact_name": "Nguyen Van A",
                "phone": "(028) 3775 3232",
                "mobile": "",
                "fax": "(028) 3775 1575",
                "email": "info@lotte.vn",
                "address1": "",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "0",
                "city": "",
                "country": "Viet Nam",
                "website": "http://lottemart.com.vn/",
                "category": {
                    "id": "14",
                    "category_code": "CONSUMER_GOODS",
                    "category_name": "Tiêu dùng",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/5257F265FDE92A2A6807AB05410BC61A/1585245048"
                },
                "point_accumulation_rate": "0.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/D3F4C450A1069061107D92DE413999BD/1585245048",
                "images": [
                    {
                        "id": "16",
                        "type": "COVER",
                        "caption": "Lotte mart",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/D3F4C450A1069061107D92DE413999BD/1585245048"
                    },
                    {
                        "id": "117",
                        "type": "COVER",
                        "caption": "Lotte Mart",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/04EC9726633DBA7961BA7C6245A8AE42/1585474528"
                    },
                    {
                        "id": "118",
                        "type": "BACKGROUND",
                        "caption": "Lotte Mart",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/FAD88C5630D5B92E9C1A04D8880E770F/1585474551"
                    },
                    {
                        "id": "119",
                        "type": "BACKGROUND",
                        "caption": "Lotte Mart",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/8646938409F18166D9F069094ABF123F/1585474569"
                    },
                    {
                        "id": "120",
                        "type": "BACKGROUND",
                        "caption": "Lotte Mart",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/FA915EE5E8A88677B229E1221CF31AB7/1585474596"
                    }
                ]
            },
            {
                "brand_id": "12",
                "store_count": "4",
                "organization_id": "17",
                "organization_code": "VINMARTPLUS",
                "organization_name": "Vinmart+",
                "brand_code": "VINMARTPLUS",
                "brand_name": "Vinmart +",
                "contact_name": "",
                "phone": "0865347476",
                "mobile": "",
                "fax": "",
                "email": "vinmart@gmail.com",
                "address1": "",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "0",
                "city": "Thành phố Hà Nội",
                "country": "Viet Nam",
                "website": "http://www.vinmartplus.vn/",
                "category": {
                    "id": "14",
                    "category_code": "CONSUMER_GOODS",
                    "category_name": "Tiêu dùng",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/5257F265FDE92A2A6807AB05410BC61A/1585245048"
                },
                "point_accumulation_rate": "1.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/FD9C16B923FC901E32B52C9A8CFAB3B0/1585245048",
                "images": [
                    {
                        "id": "12",
                        "type": "COVER",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/FD9C16B923FC901E32B52C9A8CFAB3B0/1585245048"
                    },
                    {
                        "id": "61",
                        "type": "COVER",
                        "caption": "VinMart+",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/B98B65ED0A560A2F35CD832858661126/1585419727"
                    },
                    {
                        "id": "62",
                        "type": "BACKGROUND",
                        "caption": "VinMart+",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/AB011F70EBC8648E13B1DB95964C277E/1585419751"
                    },
                    {
                        "id": "63",
                        "type": "BACKGROUND",
                        "caption": "VinMart+",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/F91194569FDC64DAAC371CE6D7021644/1585419774"
                    },
                    {
                        "id": "64",
                        "type": "BACKGROUND",
                        "caption": "VinMart+",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/B907035C6FEF90C780720364BC82C60D/1585419795"
                    }
                ]
            },
            {
                "brand_id": "31",
                "store_count": "4",
                "organization_id": "11",
                "organization_code": "F5IC",
                "organization_name": "CGV Cinemas Vietnam",
                "brand_code": "CGVVN",
                "brand_name": "CGV Việt Nam",
                "contact_name": "",
                "phone": "1900 6017",
                "mobile": "1900 6017",
                "fax": "",
                "email": "hoidap@cgv.vn",
                "address1": "",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "0",
                "city": "",
                "country": "Viet Nam",
                "website": "cgv.vn",
                "category": {
                    "id": "2",
                    "category_code": "ENTERTAINMENT",
                    "category_name": "Entertainment",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/398029CA95925D63230F9661A76DCECD/1585245048"
                },
                "point_accumulation_rate": "20.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/E337DEEBDAF9919FD447ED0D8D826E8A/1585245048",
                "images": [
                    {
                        "id": "11",
                        "type": "COVER",
                        "caption": "",
                        "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/E337DEEBDAF9919FD447ED0D8D826E8A/1585245048"
                    }
                ]
            },
            {
                "brand_id": "71",
                "store_count": "3",
                "organization_id": "22",
                "organization_code": "MOBIFONE22",
                "organization_name": "Tổng công ty Viễn thông MobiFone",
                "brand_code": "MOBIFONE",
                "brand_name": "MOBIFONE",
                "contact_name": "",
                "phone": "",
                "mobile": "",
                "fax": "",
                "email": "",
                "address1": "",
                "address2": "",
                "address3": "",
                "about_brand_in_website_page_id": "0",
                "city": "",
                "country": "Viet Nam",
                "website": "",
                "category": {
                    "id": "6",
                    "category_code": "TECH",
                    "category_name": "Tech",
                    "image_url": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/8B2855A86473C4375E51C5D5A6B42DCA/1585245048"
                },
                "point_accumulation_rate": "0.00%",
                "logo": "https://api.ayho.vn/8854/gup2start/rest/photoReader/1.0.0/23267DE21EC4DC3EC13092E14C83EE71/1588566810",
                "images": []
            }
        ]
    }
  }
  
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
    $('.slides-partner').owlCarousel({
		loop:true,
	    margin:30,
	    dots: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        600:{
	            items:3,
	        },
	        768:{
	            items:4,
	        },
	        1024:{
	            items:6,
	        }
	    }
	});
  };
  
  render () {
    const {brands} = this.state;

    return (
      <Layout title="Đối tác My Point Việt Nam">
        <Navbar/>
		<main id="main">
            <div className="bg-paralex" style={{backgroundImage: 'url("../../images/banner_doitac.jpg")'}}>
            <h2 className="page-title">Đối tác</h2>
            </div>
            <div className="main-content">
            <div className="container">
                <div className="content">
                <div className="tab-list" data-tab="#tab-content">
                    <a className="tab-list-item active" href="javascript:void(0)" data-tag="#All">
                    Tất cả
                    </a>
                    <a className="tab-list-item" href="javascript:void(0)" data-tag="#amthuc">
                    Ẩm thực
                    </a>
                    <a className="tab-list-item" href="javascript:void(0)" data-tag="#dulich">
                    Du lịch
                    </a>
                </div>
                <div id="tab-content">
                    <div id="All" className="tab-content wss">
                        <div className="list-partner">
                            <div className="row">
                                {
                                    brands && brands.length ?
                                    brands.map( brand => 
                                    <div className="col-md-4 col-sm-6 col-12" key={brand.id}>
                                        <div className="partner-item">
                                            <div className="image">
                                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                                            </div>
                                            <div className="description">
                                                <a href="#" className="title"><img src={brand.logo} alt="" /> {brand.organization_name}</a>
                                                <div className="group">
                                                <p>% Tích <span>30%</span></p>
                                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; {brand.category.category_name}</p>
                                                </div>
                                                <div className="readmore text-right">
                                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>):null
                                }
                            </div>
                        </div>
                    <div className="pagination-custom text-right">
                        <ul className="paginations">
                        <li><a href="#"><i className="far fa-angle-left" /></a></li>
                        <li><span>1</span></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li>...</li>
                        <li><a href="#">20</a></li>
                        <li><a href="#"><i className="far fa-angle-right" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div id="amthuc" className="tab-content wss">
                    <div className="list-partner">
                        <div className="row">
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="pagination-custom text-right">
                        <ul className="paginations">
                        <li><a href="#"><i className="far fa-angle-left" /></a></li>
                        <li><span>1</span></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li>...</li>
                        <li><a href="#">20</a></li>
                        <li><a href="#"><i className="far fa-angle-right" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div id="dulich" className="tab-content wss">
                    <div className="list-partner">
                        <div className="row">
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="partner-item">
                            <div className="image">
                                <a href="#"><img src="../../images/doitac-img.png" alt="" /></a>
                            </div>
                            <div className="description">
                                <a href="#" className="title"><img src="../../images/icon-starbuck.svg" alt="" /> Starbuck Coffee</a>
                                <div className="group">
                                <p>% Tích <span>30%</span></p>
                                <p><img src="../../images/thuongmai.svg" alt="" />&nbsp;&nbsp; Thương mại điện tử</p>
                                </div>
                                <div className="readmore text-right">
                                <a href="#">Xem chi tiết <i className="far fa-arrow-right" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="pagination-custom text-right">
                        <ul className="paginations">
                        <li><a href="#"><i className="far fa-angle-left" /></a></li>
                        <li><span>1</span></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li>...</li>
                        <li><a href="#">20</a></li>
                        <li><a href="#"><i className="far fa-angle-right" /></a></li>
                        </ul>
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

export default PartnerPage;