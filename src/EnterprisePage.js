import React from "react";
//import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { Trans } from "react-i18next";
import WhiteLabelIntro from "./WhiteLabelIntro";
import WhoIsUsingUs from "./WhoIsUsingUs";
import EnterpriseBenefits from "./EnterpriseBenefits";
import Footer from "./Footer";
//import { search } from "./requests";
//import Card from "react-bootstrap/Card";

// const schema = yup.object({
//     keyword: yup.string().required("Keyword is required"),
// });

function EnterprisePage() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    //const handleSubmit = async e => {
    //    const response = await search({q: e.keyword});
        //setArticles(response.data.response.docs || []);
    //};

    return (
            <div className="EnterprisePage">

                {/* Componentize this! TODO */}
                <div className="EnterpriseBanner">
                    <div className="inner-wrapper">
                        <div className="ent-logo-wrapper animate-from-bottom">
                            <i className="ent-logo"></i>
                        </div>

                        <div className="animate-from-bottom">
                            <h1>{t("For Enterprise")}</h1>
                            {/*<p>{t("Enterprise Intro")}</p>*/}
                        </div>
                    </div>

                    <div className="image-wrapper animate-from-right"></div>
                </div>

                <WhoIsUsingUs />
                <EnterpriseBenefits />
                <WhiteLabelIntro />

                <Footer />
            </div>
    );
}

export default EnterprisePage;
