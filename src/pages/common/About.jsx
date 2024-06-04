import React from "react";
import Layout from "../../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">Welcome to ShopEase, your top choice for fashion, electronics, home goods, and more. Since 2020, we’ve grown into a leading online retailer committed to offering the latest products at unbeatable prices. Our mission is to make shopping easy and enjoyable. We pride ourselves on exceptional customer service, from browsing to delivery. With a diverse range of high-quality items, detailed product descriptions, genuine reviews, and hassle-free returns, we aim to provide a seamless and secure shopping experience. Join our community and discover the convenience of online shopping with ShopEase. Happy shopping!</p>
                </div>
            </div>
        </Layout>
    );
};

export default About;