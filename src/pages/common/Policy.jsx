import React from "react";
import Layout from "../../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4 ">
                    <h3>Data Protection Privacy
                    </h3>
                    <p>We use secure servers and encryption to protect your data.</p>
                    <h3>Third-Party Sharing</h3>
                    <p>We do not sell your data but may share it with service providers to complete transactions.</p>
                    <h3>User Rights</h3>
                    <p>You can access, update, or delete your information anytime by contacting us.</p>
                    <h3>Consent and Changes</h3>
                    <p>Using our site means you agree to our practices. Review this policy regularly for updates.</p>
                </div>
            </div>
        </Layout>
    );
};

export default Policy;