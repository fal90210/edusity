import React, { Component } from 'react';
import { translate, useTranslation } from "react-i18next";
// import { withRouter } from "react-router-dom";
//import ChangeLanguage from "./ChangeLanguage";
//import Header from "./Header";

const { t } = useTranslation();

function TeacherBanner() {
    const { t } = useTranslation();
    //const [articles, setArticles] = useState([]);
    //const [count, setCount] = useState(0);

    return (
            <section className="teacherBanner">
                {/*<p className="center">{t("Enterprise Intro")}</p>*/}

                <div className="inner-wrapper">

                    <div className="teacher animate-from-bottom"></div>
                    <div className="cta-btn center">
                        <a href="/register">{t("Be an Instructor")}</a>
                    </div>

                    <div className="teacher-title animate-from-bottom">
                        <h2>{t("Take your passion")}</h2>
                    </div>

                </div>
            </section>
    );
}

// extended main view with translate hoc
//export default translate("translations")(HeroBanner);
export default TeacherBanner;
